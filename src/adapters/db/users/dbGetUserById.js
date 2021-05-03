import docClient from '../../../framework/aws/dynamodb';
import {GetCommand} from "@aws-sdk/lib-dynamodb";
const TableName = 'users';

export default async function dbGetUserById (userId) {
  return await docClient.send(
    new GetCommand({
      TableName,
      Key: {
        userId
      }
    })
  );
}