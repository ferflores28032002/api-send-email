import nodemailer from 'nodemailer'
import { PASSWORD, PORT_SMTP, SERVICE, USER } from '../env/configEnv.js';

// Configuración del smtp para el envio del gmail 

var transporter = nodemailer.createTransport({
    service: SERVICE, 
    secure: false, 
    port: PORT_SMTP, 
    auth: {
        user: USER,
        pass: PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
});


export const sendEmail = (req, res) => {

    const { name, email } = req.body;

    try {

        // Información del gmail

        const message = {
            // from: "fernandojose28032002@gmail.com", 
            to: email, 
            subject: `¡Hola ${name}!`,
            text: "Este es un correo enviado desde nodemailer",
            html: `<!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Send Email</title>
            </head>
            <body
                style="margin: 0; padding: 0; box-sizing: border-box; background-color: rgb(137, 137, 240);"
            >
                <div
                    style="font-family: monospace; padding: 15px;"
                >
                    <h4
                        style="text-align: center; 
                        color: white;
                        background-color: rgb(137, 137, 240);"
                    >
                       ¡ Bienvenido ${name} !
                    </h4>
            
            
                    <div
                        style="text-align: center; color: white;"
                    >
                        <h4>¡Te has Registrado con exito!</h4>
            
                    </div>
            
                </div>
            </body>
            </html>`
        }

        const Send = transporter.sendMail(message, (error) => {
            if(error) {
                return res.status(401).json({
                    msg: "¡Ha ocurrido un error al enviar el correo!"
                })
            }else {
                return res.json({
                    msg: "¡Correo enviado exitosamente a " + name + " !"
                })
            }
            
        })
        


    } catch (error) {
        console.log(error)
    }
}