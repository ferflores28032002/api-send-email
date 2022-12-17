
// Configuración para acceder alas variables de entorno

import dotenv from 'dotenv'

dotenv.config({ path: './env/.env'})

// Exportamos todas las variables de entorno

export const PUERTO=process.env.PORT;
export const SERVICE=process.env.SERVICE;
export const PORT_SMTP=process.env.PORT_SMTP;
export const USER=process.env.USER;
export const PASSWORD=process.env.PASSWORD;