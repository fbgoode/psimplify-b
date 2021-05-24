require('dotenv').config();

const connectToDatabase = require('./src/framework/mongodb');

// const { handler: registerfn } = require('./src/framework/aws/cognito/register');
// const cognitoevent = require('./events/register.json');

const adapters = require('./src/framework/express/unprotected/adapters');
const event = require('./events/getSlots.json');

(async () => {
    await connectToDatabase(null,null,()=>{});
    // const result = await registerfn(cognitoevent);
    
    const result = await adapters.getSlots(event.req,event.res);

    console.log(result);

})();

