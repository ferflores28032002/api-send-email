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
            <html
              lang="en"
              xmlns="http://www.w3.org/1999/xhtml"
              xmlns:v="urn:schemas-microsoft-com:vml"
              xmlns:o="urn:schemas-microsoft-com:office:office"
            >
              <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="x-apple-disable-message-reformatting" />
                <meta
                  name="format-detection"
                  content="telephone=no,address=no,email=no,date=no,url=no"
                />
                <meta name="color-scheme" content="light dark" />
                <meta name="supported-color-schemes" content="light dark" />
                <title></title>
              </head>
            
              <body
                width="100%"
                style="margin: 0; padding: 0 !important; background-color: #fff !important"
              >
                <center
                  role="article"
                  aria-roledescription="email"
                  lang="en"
                  style="width: 100%; background-color: #fff !important"
                >
                  <div style="max-width: 680px; margin: 0 auto" class="email-container">
                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      width="100%"
                      style="margin: auto"
                    >
                      <tr>
                        <td
                          style="
                            text-align: center;
                            background-color: #ffffff;
                            background-position: center center !important;
                            background-size: cover !important;
                            height: 350px;
                          "
                        >
                          <div>
                            <table
                              role="presentation"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="margin: 0; height: 350px; box-sizing: border-box"
                            >
                              <tr>
                                <td></td>
                                <td
                                  style="
                                    text-align: center;
                                    padding: 80px 0 0 0;
                                    vertical-align: top;
                                    height: 350px;
                                    width: 300px;
                                    box-sizing: border-box;
                                  "
                                >
                                  <h2>¡Hola ${name}!</h2>
                                  <p class="black_text">
                                    Gracias por ser parte de nuestra comunidad
                                  </p>
                                </td>
                                <td></td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
            
                      <tr>
                        <td
                          style="
                            text-align: center;
                            background-image: url('https://cloud1.email2go.io/94f6d7e04a4d452035300f18b984988c/0070b555ad4b4fa5b565d94c7a0df2c10149697c4f370d87a4feefe9df412999.png');
                            background-color: #fff;
                            background-position: center center !important;
                            background-size: cover !important;
                            height: 435px;
                          "
                        >
                          <div>
                            <table
                              role="presentation"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="margin: 0; height: 435px; box-sizing: border-box"
                            >
                              <tr>
                                <td></td>
                                <td
                                  style="
                                    text-align: center;
                                    padding: 10px 0 0 0;
                                    vertical-align: top;
                                    height: 435px;
                                    width: 300px;
                                    box-sizing: border-box;
                                  "
                                >
                                  <h3>Te has registrado con exito</h3>
                                  <table
                                    role="presentation"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                  ></table>
                                </td>
                                <td></td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </center>
              </body>
            </html>
            `
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