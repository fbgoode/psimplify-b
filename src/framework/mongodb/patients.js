const Mongoose = require('mongoose');

const blueprint = require('../../entities/patient/schema');

const schema = new Mongoose.Schema(blueprint(Mongoose.Types), { timestamps: true });
schema.index( { name: "text", lastname: "text", email: "text", phone: "text" } );

module.exports = Mongoose.model('Patient', schema);