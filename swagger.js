const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'contacts API',
    description: 'Contacts API',
  },
  host: 'localhost:3010',
  schemes: ['http', 'http'],
};

const outputFile = './swagger.json';

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });