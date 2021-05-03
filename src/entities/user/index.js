export default function makeUser ({
    email,
    name,
    lastname,
    phone = '',
    address = '',
    company = '',
    nationalid = '',
    colnum = '',
    plan = 'free',
    patients = [],
    config = {},
    createdAt = Date.now(),
    modifiedAt = Date.now()
  }) {
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
    email,
    name,
    lastname,
    phone,
    address,
    company,
    nationalid,
    colnum,
    plan,
    patients,
    config,
    createdAt,
    modifiedAt
  };
}