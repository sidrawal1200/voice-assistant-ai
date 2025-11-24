import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb'

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' })
export const ddb = DynamoDBDocumentClient.from(client)

export async function getUserByEmail(email: string) {
  const res = await ddb.send(new GetCommand({ TableName: process.env.USERS_TABLE, Key: { email } }))
  return res.Item
}

export async function putUser(user: any) {
  await ddb.send(new PutCommand({ TableName: process.env.USERS_TABLE, Item: user }))
}
