const Mongoose = require('mongoose');

const blueprint = require('../../entities/user/schema');

const schema = new Mongoose.Schema(blueprint(), { timestamps: true });
schema.index( { name: "text", lastname: "text", email: "text", phone: "text" } );

module.exports = Mongoose.model('User', schema);