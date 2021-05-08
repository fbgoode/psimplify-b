const Mongoose = require('mongoose');

const blueprint = require('../../entities/appointment/schema');

const schema = new Mongoose.Schema(blueprint(Mongoose.Types), { timestamps: true });

module.exports = Mongoose.model('Appointment', schema);