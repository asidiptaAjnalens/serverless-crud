// getUserById.js
'use strict';

const { getSuccessResponse } = require('../../../Utils/success');
const { getErrorResponse } = require('../../../Utils/error');

const { UsersModel } = require('../../../Models/User/user');

module.exports.main = async (event) => {
  try {
    const queryStringParameters = event.queryStringParameters;
    const { id } = queryStringParameters;

    const result = await UsersModel.get({ id });
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
