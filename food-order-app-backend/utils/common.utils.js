async function sendResponse(response) {
  const { res, status, ...otherRes } = response;
  res.status(status).json(otherRes);
}


module.exports = {
    sendResponse
}