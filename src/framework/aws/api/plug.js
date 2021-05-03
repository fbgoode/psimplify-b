// PLUG FOR AWS HTTP API

export default function makeApiCallback(adapter) {
    return async (event, context) => {
        console.log(event,context);
        const request = {
            body: event.body,
            query: event.queryStringParameters,
            params: event.pathParameters,
            ip: event.requestContext.http.sourceIp,
            method: event.requestContext.http.method,
            path: event.requestContext.http.path,
            headers: event.headers,
            jwtclaims: event.requestContext.authorizer.jwt.claims,
            jwtscopes: event.requestContext.authorizer.jwt.scopes,
        };
        let statusCode;
        let body;
        let headers = {
            "Content-Type": "application/json"
        };
        try {
            const response = await adapter(request); // Call to adapter
            statusCode = response.statusCode;
            body = response.body;
            return {
                statusCode,
                body,
                headers
            };
        } catch(e) {
            statusCode = 500;
            body = {error: 'An unkown error occurred.'}
            return {
                statusCode,
                body,
                headers
            };
        }
    }
}