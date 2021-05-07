const userdb = require('../../../adapters/db/users');

const makeGetUser = require('../../../useCases/customer/user/getUser');
const makeGetuserAdapter = require('../../../adapters/api/users/getUser');
const getUser = makeGetUser({userdb});
exports.getUser = makeGetuserAdapter({getUser});