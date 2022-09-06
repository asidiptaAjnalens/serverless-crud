// getAllUsers.js
'use strict';

const { getSuccessResponse } = require('../../../Utils/success');
const { getErrorResponse } = require('../../../Utils/error');

const { UsersModel } = require('../../../Models/User/user');

module.exports.main = async (event) => {
  try {
    const result = await UsersModel.scan().exec();
    console.log(result);
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
