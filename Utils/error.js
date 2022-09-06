// get error response

const getErrorResponse = (info) => {
    console.log(info);
    return {
        status: info.status || 500,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(info),
    };
};

module.exports = { getErrorResponse };
