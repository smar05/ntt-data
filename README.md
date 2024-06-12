# Prueba Técnica desarrollador Backend For FrontEnd - NTT DATA

Esta aplicación de inventario consta de un Backend for Frontend (BFF) desarrollado en Node.js y un frontend en Angular, se implementa como motor de base de datos relacional MySql. El BFF actúa como intermediario entre el frontend y una API externa que proporciona información sobre productos en inventario.

## Instalación y Configuración

### Frontend (Angular)

1. Clona este repositorio.
2. Navega a la carpeta `front`: `cd front`
3. Instala las dependencias: `npm install`
4. Inicia el servidor de desarrollo: `npm run start`

### Backend (Node.js + Express)

1. Clona este repositorio.
2. Navega a la carpeta `server`: `cd server`
3. Instala las dependencias: `npm install`
4. Inicia el servidor en modo de desarrollo: `npm run dev`

## Funcionalidades

Autenticación: La API BFF maneja la autenticación con tokens JWT para garantizar la seguridad de la aplicación.
Gestión de Productos: El frontend permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de productos.
Cache: Se implementa un sistema de caché para almacenar temporalmente información frecuentemente solicitada y reducir la carga en la API externa.

## Documentación de APIs

La documentación de las APIs expuestas por el backend se encuentra disponible mediante Swagger. Puedes acceder a la documentación en `http://localhost:3000/api-docs/` una vez que el servidor está en ejecución.

## Contacto

Si tienes alguna pregunta o comentario sobre este proyecto, no dudes en contactarme:

- Nombre: Ricardo Mantilla
- Correo electrónico: mantillasanchezr@gmail.com
