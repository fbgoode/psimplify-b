const appointmentdb = require('../../../adapters/db/appointments');
const userdb = require('../../../adapters/db/users');
const patientdb = require('../../../adapters/db/patients');

const makeNewAppointment = require('../../../useCases/customer/appointment/newAppointment');
const makeNewAppointmentAdapter = require('../../../adapters/api/appointments/newAppointment');
const newAppointment = makeNewAppointment({appointmentdb});
exports.newAppointment = makeNewAppointmentAdapter({newAppointment});

const makeGetSlots = require('../../../useCases/patient/user/getSlots');
const makeGetSlotsAdapter = require('../../../adapters/api/users/getSlots');
const getSlots = makeGetSlots({appointmentdb, userdb, patientdb});
exports.getSlots = makeGetSlotsAdapter({getSlots});