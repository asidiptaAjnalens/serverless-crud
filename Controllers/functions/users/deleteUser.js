// deleteUser.js
'use strict';

const { getSuccessResponse } = require('../../../Utils/success');
const { getErrorResponse } = require('../../../Utils/error');

const { UsersModel } = require('../../../Models/User/user');

module.exports.main = async (event) => {
  try {
    const request = JSON.parse(event.body);
    const { id } = request;

    const result = await UsersModel.delete({ id });
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
