const { handler: apifn } = require('./src/framework/express/index');
const apievent = require('./events/getUser.json');

const { handler: registerfn } = require('./src/framework/aws/cognito/register');
const cognitoevent = require('./events/register.json');

(async () => {

    // const result = await apifn(apievent);

    const result = await registerfn(cognitoevent);

    console.log(result);

})();

