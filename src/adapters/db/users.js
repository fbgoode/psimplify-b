const docClient = require('../../framework/aws/dynamodb');
const {GetCommand, PutCommand} = require("@aws-sdk/lib-dynamodb");
const TableName = 'users';

async function getUserById (userId) {
  const response = await docClient.send(
    new GetCommand({
      TableName,
      Key: {
        userId
      }
    })
  );
  return response.Item;
}

async function addUser (user) {
  const response = await docClient.send(
    new PutCommand({
      TableName,
      Item: user
    })
  );
  return getUserById(user.userId);
}

module.exports = Object.freeze({
  addUser,
  getUserById
});