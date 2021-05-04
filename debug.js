const { handler } = require('./src/framework/aws/api/index');
const event = require('./events/getUser.json');

(async () => {

    const result = await handler(event);

    console.log(result);

})();

