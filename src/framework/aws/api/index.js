
const getUserApiCallback = require('./users/getUser');
exports.handler = async (event, context) => {
    console.info('received:', event);
    let response;
    switch ([event.httpMethod,event.resource]) {
        case ['GET','/users/{id}']:
            response = getUserApiCallback(event, context);
            break;
        default:
            response = {
                statusCode:404,
                body:{message:'Endpoint not found.'},
                headers:{"Content-Type": "application/json"}
            };
    }
    return response;
}