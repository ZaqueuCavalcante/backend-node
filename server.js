const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const express = require("express");
const app = express();

const { bootstrapApp } = require('./app/bootstrap');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

bootstrapApp(app);

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Servidor web iniciado: http://localhost:${PORT}/`);
});
