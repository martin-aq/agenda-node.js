const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./src/routes/api');

const app = express();

mongoose.set('strictQuery', false);
const port = 3000;

app.use(apiRoutes);

app.get('', (req, res) => {
    res.send('Hola mundo');
});

const uri = 'mongodb+srv://admin_user:12345@cluster0.stmdzl3.mongodb.net/agenda?retryWrites=true&w=majority';

mongoose.connect(uri, (err) => {
    if(err){
        console.log('No se pudo conectar a la base de datos');
    } else{
        console.log('Se conecto correctamente a la base de datos');
        app.listen(port, () => {
            console.log('app is runnung un port ' + port);
        });
    }
});
