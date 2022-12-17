import express from 'express'
import cors from 'cors'
import { default as routerSendEmail } from './routers/sendEmail.router.js';
import { PUERTO } from './env/configEnv.js';

const app = express();

// Configuramos cors para evitar problemas de peticiones a los endpoints

app.use(cors())

// Configuración de entradas de datos json

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

// Router y controlador para el envio de los correos electronicos

app.use(routerSendEmail)


app.listen(PUERTO, () => console.log(`Servidor corriendo en el puerto -> ${PUERTO}`))