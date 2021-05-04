// PostConfirmation PLUG FOR AWS COGNITO

const makeRegisterUser = require('../../../useCases/customer/user/registerUser');
const dbAddUser = require('../../../../adapters/db/users/dbAddUser');

const registerUser = makeRegisterUser({dbAddUser});

exports.handler = (event, context) => {
    console.log(event,context);
    
    const response = await registerUser(request);
    console.log(response);
}