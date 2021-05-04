// PostConfirmation PLUG FOR AWS COGNITO

const makeRegisterUser = require('../../../useCases/customer/user/registerUser');
const dbAddUser = require('../../../../adapters/db/users/dbAddUser');

const registerUser = makeRegisterUser({dbAddUser});

exports.handler = (event, context, callback) => {
    console.log(event);
    
    const userData = {
        email: event.request.userAttributes.email
    };

    const response = await registerUser(userData);

    callback(null, event);

}