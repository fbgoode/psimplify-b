
const getUserApiCallback = require('./users/getUser');
exports.handler = async (event) => {
    console.info('received:', event);
    let response;
    switch (`${event.httpMethod} ${event.resource}`) {
        case 'GET /users/{id}':
            return await getUserApiCallback(event);
        default:
            return {
                statusCode:404,
                body:JSON.stringify({message:'Endpoint not found.'}),
                headers:{"Content-Type": "application/json"}
            };
    }
}