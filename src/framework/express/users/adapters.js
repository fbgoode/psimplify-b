const userdb = require('../../../adapters/db/users');

const makeGetUser = require('../../../useCases/customer/user/getUser');
const makeGetUserAdapter = require('../../../adapters/api/users/getUser');
const getUser = makeGetUser({userdb});
exports.getUser = makeGetUserAdapter({getUser});

const makeUpdateProfile = require('../../../useCases/customer/user/updateProfile');
const makeUpdateProfileAdapter = require('../../../adapters/api/users/updateProfile');
const updateProfile = makeUpdateProfile({userdb});
exports.updateProfile = makeUpdateProfileAdapter({updateProfile});

const makeUpdateConfig = require('../../../useCases/customer/user/updateConfig');
const makeUpdateConfigAdapter = require('../../../adapters/api/users/updateConfig');
const updateConfig = makeUpdateConfig({userdb});
exports.updateConfig = makeUpdateConfigAdapter({updateConfig});