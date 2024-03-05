import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { config } from "dotenv";

config()

const port = process.env.PORT

const options = {
    swaggerDefinition: {
        restapi: '3.0.0',
        info: {
            title: 'ruyu test',
            version: '1.0.0',
            description: 'bla bla bla',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            },
        ],
    },
    apis: ['./src/routes/*.js'],
}

const specs = swaggerJsDoc(options)


export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}