export async function handler() {
  const AWS = require("aws-sdk");
  const client = new AWS.DynamoDB({ region: process.env.AWS_REGION });

  const params = {
    TableName: process.env.MOOD_TABLE_NAME,
  };

  const result = await client.scan(params).promise();

  const moods = (result.Items || []).map(item => ({
    slot: item.Slot.S,
    user: item.User.S,
    value: parseInt(item.Value.N),
    timestamp: item.Timestamp.S,
  }));

  return { statusCode: 200, body: JSON.stringify(moods) };
}
