module.exports = function makeGetSlots ({ appointmentdb, userdb, patientdb }) {
  return async function getSlots(pid) {
    if (!pid) {
      throw new Error('Debes proporcionar un id de paciente.');
    }
    const patient = await patientdb.getById(pid);
    const user = await userdb.getById(patient.user);
    let fromDate = new Date();
    fromDate.setHours(23,59,59,0);
    let toDate = new Date();
    toDate.setHours(23,59,59,0);
    toDate.setDate(toDate.getDate() + 21);
    const appointments = await appointmentdb.query({user:user._id,fromDate,toDate});
    const slots = getAllSlots(user.config.appointments, appointments);
    return [{_id:user._id,name:user.name,lastname:user.lastname}, slots];
  }
}

const getAllSlots = (config, appointments) => {
  let slots = [];
  let date = new Date();
  for (let count = 0; count<21; count++) {
      date.setDate(date.getDate() + 1);
      slots.push([new Date(date),...getDaysSlots(date, config, appointments)]);
  }
  return slots;
}

const getDaysSlots = (date, config, appointments) => {
  let daysAppointments = getDaysAppointments(date, appointments);
  let daysExclusions = getDaysExclusions(date, config);
  let daysEvents = [...daysAppointments,...daysExclusions];
  daysEvents.sort((a,b)=>{
    if (a.from<b.from) return -1;
    if (a.from>b.from) return 1;
    return 0;
  });
  let schedule = getUserSchedule(date, config);
  let morningsAvailability = [];
  let afternoonsAvailability = [];
  if (schedule?.morning?.active) morningsAvailability = getAvailability(date,schedule.morning,daysEvents);
  if (schedule?.afternoon?.active) afternoonsAvailability = getAvailability(date,schedule.afternoon,daysEvents);
  const availability = [...morningsAvailability,...afternoonsAvailability];
  let slots = [];
  for (let range of availability) {
    let rangeSlots = getRangeSlots(range);
    if (rangeSlots) slots = [...slots,...rangeSlots];
  }
  return slots;
}

const getRangeSlots = (range) => {
  let slots = [];
  let from = range.from.getTime();
  const to = range.to.getTime();
  while (from + 36e+5 <= to) {
    slots.push(new Date(from));
    from += 36e+5;
  }
  return slots;
}

const getAvailability = (date,schedule,events) => {
  let from = new Date(date).setHours(schedule.from.hour,schedule.from.minute,0,0);
  let to = new Date(date).setHours(schedule.to.hour,schedule.to.minute,0,0);
  let availability = [];
  for (let event of events) {
    if (event.status == "cancelled") continue;
    if (event.from > to) break;
    if (event.from > from) {
      availability.push({from:new Date(from),to: new Date(event.from),type:"availability"});
      if (event.to > to) return availability;
      from = event.to;
    } else if (event.to > from) {
      if (event.to > to) return availability;
      from = event.to;
    }
  }
  if(to>from) availability.push({from:new Date(from),to: new Date(to),type:"availability"});
  return availability;
}

const getUserSchedule = (date, config) => {
  const weekday = date.toLocaleDateString('en-EN',{weekday:"long"}).toLowerCase();
  let schedule = [];
  if (config?.specialDays[weekday]?.override)
    schedule = config.specialDays[weekday].schedule;
  else schedule = config.schedule;
  return schedule;
}

const getDaysExclusions = (date, config) => {
  let from = new Date(date);
  from.setHours(0,0,0,0);
  let to = new Date(date);
  to.setHours(23,59,59,0);
  let daysExclusions = [];
  for (let exclusion of config?.exclude) {
    const excFrom = new Date(exclusion.from);
    const excTo = new Date(exclusion.to);
    if (excFrom >= from && excTo <= to)
      daysExclusions.push({title:exclusion.title,from:excFrom,to:excTo,type:"exclusion"});
    else if (excFrom <= from && excTo >= to)
      daysExclusions.push({title:exclusion.title,from,to,type:"exclusion"});
    else if (excFrom <= from && excTo >= from)
      daysExclusions.push({title:exclusion.title,from,to:excTo,type:"exclusion"});
    else if (excFrom <= to && excTo >= to)
      daysExclusions.push({title:exclusion.title,from:excFrom,to,type:"exclusion"});
  }
  return daysExclusions;
}

const getDaysAppointments = (date,appointments) => {
  let from = new Date(date).setHours(0,0,0,0);
  let to = new Date(date).setHours(23,59,59,999);
  let daysAppointments = [];
  for (let appointment of appointments) {
    const date = new Date(appointment.date);
    if (date >= from && date <= to) {
      const to = new Date(appointment.date);
      to.setHours(date.getHours(),date.getMinutes()+appointment.duration+appointment.extra);
      daysAppointments.push({...appointment,from:date,to,type:"appointment"});
    }
  }
  return daysAppointments;
}