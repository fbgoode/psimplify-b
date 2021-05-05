module.exports = function makeUser ({
  userId,
  email,
  name,
  lastname,
  phone = '',
  address = '',
  company = '',
  nationalid = '',
  colnum = '',
  plan = 'free',
  config = {},
  createdAt = Date.now(),
  modifiedAt = Date.now()
}) {
  if (!userId) {
    throw new Error('User must have an id.');
  }
  if (!email) {
    throw new Error('User must have an email.');
  }
  if (!name) {
    throw new Error('User must have a name.');
  }
  if (!lastname) {
    throw new Error('User must have a last name.');
  }
  return {
    userId,
    email,
    name,
    lastname,
    phone,
    address,
    company,
    nationalid,
    colnum,
    plan,
    config,
    createdAt,
    modifiedAt
  };
}