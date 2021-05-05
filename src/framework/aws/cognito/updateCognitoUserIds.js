const {
    CognitoIdentityProviderClient,
    AdminUpdateUserAttributesCommand,
  } = require("@aws-sdk/client-cognito-identity-provider");

const client = new CognitoIdentityProviderClient({ region: process.env.AWS_REGION || 'eu-central-1' });

module.exports = async (userPoolId,userName,orgId,userId) => {
    const response = await client.send(new AdminUpdateUserAttributesCommand({
        UserAttributes: [
            {
                Name: 'custom:orgId',
                Value: orgId
            },
            {
                Name: 'custom:userId',
                Value: userId
            }
        ],
        UserPoolId: userPoolId,
        Username: userName
    }));
    return response;
}