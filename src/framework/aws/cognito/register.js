// PostConfirmation PLUG FOR AWS COGNITO

import makeRegisterUser from '../../../useCases/customer/user/registerUser';
import dbAddUser from '../../../../adapters/db/users/dbAddUser';

const registerUser = makeRegisterUser({dbAddUser});

exports.handler = (event, context) => {
    console.log(event,context);
    
    const response = await registerUser(request);
    console.log(response);
}