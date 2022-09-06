// get success response

const getSuccessResponse = (info) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: 'Success',
      status: 200,
      data: info,
      success: true,
    }),
  };
};

module.exports = { getSuccessResponse };
