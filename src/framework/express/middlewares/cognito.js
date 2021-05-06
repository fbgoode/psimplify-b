const CognitoExpress = require("cognito-express");

const cognitoExpress = new CognitoExpress({
    region: "eu-central-1",
    cognitoUserPoolId: "eu-central-1_e4NS5sZFi",
    tokenUse: "id", //Possible Values: access | id
    tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});

const authenticate = (req,res,next)=>{

    const accessHeaderFromClient = req.headers.authorization;
 
    //Fail if token not present in header. 
    if (!accessHeaderFromClient) return res.status(401).send("Token missing from header");

    const accessTokenFromClient = accessHeaderFromClient.split(' ')[1];
 
    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
        
        //If API is not authenticated, Return 401 with error message. 
        if (err) return res.status(401).send(err);
        
        //Else API has been authenticated. Proceed.
        res.locals.user = response;
        next();

    });
    
}




module.exports = authenticate;