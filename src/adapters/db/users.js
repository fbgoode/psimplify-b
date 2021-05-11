const User = require('../../framework/mongodb/users');

async function getById (userId) {
  const response = await User.findById(userId);;
  return response;
}

async function getByEmail (email) {
  const response = await User.findOne({email});;
  return response;
}

async function add (user) {
  const response = await User.create(user);
  return response;
}

async function update (userId,userData) {
  const response = await User.findByIdAndUpdate(userId,userData,{new:true});
  return response;
}

module.exports = Object.freeze({
  add,
  getById,
  getByEmail,
  update
});