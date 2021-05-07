require('dotenv').config();

const connectToDatabase = require('./src/framework/mongodb');

const { handler: registerfn } = require('./src/framework/aws/cognito/register');
const cognitoevent = require('./events/register.json');

(async () => {
    await connectToDatabase(null,null,()=>{});
    const result = await registerfn(cognitoevent);

    console.log(result);

})();

