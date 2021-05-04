const docClient = require('../../framework/aws/dynamodb');
const {GetCommand, PutCommand} = require("@aws-sdk/lib-dynamodb");
const TableName = 'users';

async function getUserById (userId) {
  return await docClient.send(
    new GetCommand({
      TableName,
      Key: {
        userId
      }
    })
  );
}

async function addUser (user) {
  return await docClient.send(
    new PutCommand({
      TableName,
      Item: user
    })
  );
}

module.exports = Object.freeze({
  addUser,
  getUserById
});