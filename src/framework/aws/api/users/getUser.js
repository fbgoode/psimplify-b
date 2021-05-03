import makeApiCallback from '../plug';
import makeGetUser from '../../../useCases/customer/user/getUser';
import dbGetUserById from '../../../../adapters/db/users/dbGetUserById';
import makeGetuserAdapter from '../../../../adapters/api/users/getUser';

const getUser = makeGetUser({dbGetUserById});
const getUserAdapter = makeGetuserAdapter({getUser});

exports.handler = makeApiCallback({getUserAdapter});