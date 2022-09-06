// Creating dynamoose schema for user

const dynamoose = require('dynamoose');
const Schema = dynamoose.Schema;

const userSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    name: {
      type: String,
    },
    usertype: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UsersModel = dynamoose.model('user', userSchema);

module.exports = { UsersModel };
