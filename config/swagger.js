const swaggerJsDoc = require('swagger-jsdoc')

const swaggerOption = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Delivery Hobe Assesment Api',
        version: '1.0.0',
      },
    },
    apis: ['./routes/products*.js'], // files containing annotations as above
  };
  exports.swaggerDocs = swaggerJsDoc(swaggerOption)