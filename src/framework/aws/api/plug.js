// PLUG FOR AWS HTTP API

module.exports = function makeApiCallback(adapter) {
    return async (event) => {
        const request = {
            body: event.body,
            query: event.queryStringParameters,
            params: event.pathParameters,
            ip: event.requestContext.identity.sourceIp,
            method: event.httpMethod,
            path: event.path,
            headers: event.headers,
            identity: event.requestContext.identity
        };
        let statusCode;
        let body;
        let headers = {
            "Content-Type": "application/json"
        };
        try {
            const response = await adapter(request); // Call to adapter
            statusCode = response.statusCode;
            body = JSON.stringify(response.body);
            return {
                statusCode,
                body,
                headers
            };
        } catch(e) {
            statusCode = 500;
            body = JSON.stringify({error: 'An unkown error occurred.'});
            // body = JSON.stringify({error: e.message});
            return {
                statusCode,
                body,
                headers
            };
        }
    }
}