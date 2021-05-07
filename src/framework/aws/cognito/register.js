// PostConfirmation PLUG FOR AWS COGNITO

const makeRegisterUser = require('../../../useCases/customer/user/registerUser');
const userdb = require('../../../adapters/db/users');

const registerUser = makeRegisterUser({userdb});

exports.handler = async (event) => {
    console.log(event);
    
    const userData = {
        name: event.request.userAttributes.given_name,
        lastname: event.request.userAttributes.family_name,
        email: event.request.userAttributes.email
    };

    const newUser = await registerUser(userData);

    return null, event;

}