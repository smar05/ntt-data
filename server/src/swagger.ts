import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition: object = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "Documentación de la API del BFF",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor de desarrollo",
    },
  ],
};

const options: object = {
  swaggerDefinition,
  apis: ["src/routes/*.ts"],
};

const swaggerSpec: any = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
