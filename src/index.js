const express = require ('express');
//install sweetalert npm package and import it here to use it in the app.js file below 
const swal = require('sweetalert2');
const app = express();
const path = require('path');


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen (3000, () => {
    console.log('server en puerto 3000')
});