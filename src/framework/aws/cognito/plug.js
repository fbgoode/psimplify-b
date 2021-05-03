// PLUG FOR AWS COGNITO

export default function makeApiCallback(adapter) {
    return async (event, context) => {
        console.log(event,context);
        const request = {
            // body: event.body,
            // query: event.queryStringParameters,
            // params: event.pathParameters,
            // ip: event.requestContext.http.sourceIp,
            // method: event.requestContext.http.method,
            // path: event.requestContext.http.path,
            // headers: event.headers,
            // jwtclaims: event.requestContext.authorizer.jwt.claims,
            // jwtscopes: event.requestContext.authorizer.jwt.scopes,
        };
        const response = await adapter(request); // Call to adapter
        return;
    }
}