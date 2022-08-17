const { Router} = require ('express')
const router = Router();

router.post('/send-email', (req, res) =>{
    console.log(req.body)
    res.send('recibido')


});

module.exports = router;