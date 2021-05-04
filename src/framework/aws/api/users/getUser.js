const makeApiCallback = require('../plug');
const makeGetUser = require('../../../../useCases/customer/user/getUser');
const usersdb = require('../../../../adapters/db/users');
const makeGetuserAdapter = require('../../../../adapters/api/users/getUser');

const getUser = makeGetUser({usersdb});
const getUserAdapter = makeGetuserAdapter({getUser});
const getUserApiCallback = makeApiCallback(getUserAdapter);

module.exports = getUserApiCallback;