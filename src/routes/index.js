const { Router} = require ('express')
const nodemailer = require ('nodemailer')
const router = Router();

router.post('/send-email', async (req, res) =>{
    // console.log(req.body)
    //destructuración de objetos
    const{name, email, phone, message} = req.body; 

    contentHTML = `
    
        <h1>Información de Usuario</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Email: ${email}</li>
            <li>Teléfono: ${phone}</li>
        </ul>
           <p> Mensaje: ${message}</p>

        `;

       const transporter = nodemailer.createTransport({
        host: "mail.bacchile.cl",
        port: 587,
        secure: false,
        auth:{
            user: 'contacto@bacchile.cl',
            pass: 'bacchile2022'
        },
        tls:{
            rejectUnauthorized: false
        }
       });

      const info= await transporter.sendMail({
            from: '"Contacto WEB Bac Chile" <contacto@bacchile.cl> ',
            to: 'cfla86@gmail.com',
            subject: 'Nuevo mensaje',
            html: contentHTML
      });

      console.log('Message sent', info.messageId);
       

    res.send('recibido')


});

module.exports = router;