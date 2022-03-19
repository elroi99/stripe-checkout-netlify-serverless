const products = require('./data/products.json');

exports.handler = async () => {
// whatever you return in this lambda fn will be sent back as a response
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};