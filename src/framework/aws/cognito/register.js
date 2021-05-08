// PostConfirmation PLUG FOR AWS COGNITO

const makeRegisterUser = require('../../../useCases/customer/user/registerUser');
const userdb = require('../../../adapters/db/users');
const connectToDatabase = require('../../mongodb');

const registerUser = makeRegisterUser({userdb});

exports.handler = async (event) => {

    await connectToDatabase(null,null,()=>{});
    
    const userData = {
        _id: event.userName,
        name: event.request.userAttributes.given_name,
        lastname: event.request.userAttributes.family_name,
        email: event.request.userAttributes.email
    };

    const newUser = await registerUser(userData);

    return null, event;

}