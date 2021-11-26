var AWS = require("aws-sdk");

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

exports.handler =  function(event, context, callback) {
  
  if(event.type === 'GET') {
    var params = {
    UserPoolId: "pool-id",
    AttributesToGet: ["email", "name", "custom:organizationCode", "custom:accessLevel"]
  };
   cognitoidentityserviceprovider.listUsers(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      callback(err)        // here is the error return
    } else {
      console.log(data);
      callback(null, data) // here is the success return
    }
  }); 
  }
  
  if(event.type === 'PUT') {
    var params = {
  UserAttributes: [
                {
                    "Name": "name",
                    "Value": "Admin123"
                },
                {
                    "Name": "custom:organizationCode",
                    "Value": "application_admin"
                }
            ],
     UserPoolId: "pool-id", /* required */
     Username: '39caf668-f0cb-49aa-a214-3e0a154d1434', /* required */
};
   cognitoidentityserviceprovider.adminUpdateUserAttributes(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      callback(err)        // here is the error return
    } else {
      console.log(data);
      callback(null, data) // here is the success return
    }
  }); 
  }
  
    if(event.type === 'DELETE') {
    var params = {
     UserPoolId: "pool-id", /* required */
     Username: event.username, /* required */
};
   cognitoidentityserviceprovider.adminDeleteUser(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      callback(err)        // here is the error return
    } else {
      console.log(data);
      callback(null, data) // here is the success return
    }
  }); 
  }
  
}
