// createUser.js
'use strict';

const { getSuccessResponse } = require('../../../Utils/success');
const { getErrorResponse } = require('../../../Utils/error');

const { v4: uuidv4 } = require('uuid');
const { UsersModel } = require('../../../Models/User/user');

module.exports.main = async (event, context, callback) => {
  try {
    const { name, email } = event.body;

    const result = await UsersModel.create({
      id: uuidv4(),
      name,
      usertype: 'lead',
    });

    console.log(result);
    return getSuccessResponse(result);
  } catch (error) {
    console.log(error);
    return getErrorResponse(error);
  }
};
