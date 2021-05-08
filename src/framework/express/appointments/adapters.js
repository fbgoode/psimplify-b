const appointmentdb = require('../../../adapters/db/appointments');

const makeNewAppointment = require('../../../useCases/customer/appointment/newAppointment');
const makeNewAppointmentAdapter = require('../../../adapters/api/appointments/newAppointment');
const newAppointment = makeNewAppointment({appointmentdb});
exports.newAppointment = makeNewAppointmentAdapter({newAppointment});

const makeGetAppointments = require('../../../useCases/customer/appointment/getAppointments');
const makeGetAppointmentsAdapter = require('../../../adapters/api/appointments/getAppointments');
const getAppointments = makeGetAppointments({appointmentdb});
exports.getAppointments = makeGetAppointmentsAdapter({getAppointments});