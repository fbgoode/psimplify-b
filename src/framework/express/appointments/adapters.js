const appointmentdb = require('../../../adapters/db/appointments');

const makeNewAppointment = require('../../../useCases/customer/appointment/newAppointment');
const makeNewAppointmentAdapter = require('../../../adapters/api/appointments/newAppointment');
const newAppointment = makeNewAppointment({appointmentdb});
exports.newAppointment = makeNewAppointmentAdapter({newAppointment});

const makeGetAppointments = require('../../../useCases/customer/appointment/getAppointments');
const makeGetAppointmentsAdapter = require('../../../adapters/api/appointments/getAppointments');
const getAppointments = makeGetAppointments({appointmentdb});
exports.getAppointments = makeGetAppointmentsAdapter({getAppointments});

const makeGetLastAppointments = require('../../../useCases/customer/appointment/getLastAppointments');
const makeGetLastAppointmentsAdapter = require('../../../adapters/api/appointments/getLastAppointments');
const getLastAppointments = makeGetLastAppointments({appointmentdb});
exports.getLastAppointments = makeGetLastAppointmentsAdapter({getLastAppointments});

const makeUpdateAppointment = require('../../../useCases/customer/appointment/updateAppointment');
const makeUpdateAppointmentAdapter = require('../../../adapters/api/appointments/updateAppointment');
const updateAppointment = makeUpdateAppointment({appointmentdb});
exports.updateAppointment = makeUpdateAppointmentAdapter({updateAppointment});