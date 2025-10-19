export async function handler(event: any) {
  const { slot, value, user } = JSON.parse(event.body);

  // Use AWS SDK via runtime
  const AWS = require("aws-sdk"); // runtime-provided
  const client = new AWS.DynamoDB({ region: process.env.AWS_REGION });

  const params = {
    TableName: process.env.MOOD_TABLE_NAME,
    Item: {
      Slot: { S: slot },
      User: { S: user },
      Value: { N: value.toString() },
      Timestamp: { S: new Date().toISOString() },
    },
  };

  await client.putItem(params).promise();

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
}
