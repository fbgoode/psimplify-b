const makeGetUser = require('../../../useCases/customer/user/getUser');
const userdb = require('../../../adapters/db/users');
const makeGetuserAdapter = require('../../../adapters/api/users/getUser');

const getUser = makeGetUser({userdb});
const getUserAdapter = makeGetuserAdapter({getUser});

module.exports = getUserAdapter;