const contacto = require('../models/contacto');

module.exports = {
    listar: (req, res) => {
        contacto.find({status: 1})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(400).send('algo salio mal');
            });
    },
    filtroNombre: (req, res) => {
        const { nombre } = req.query
        contacto.find({nombre})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(400).send('algo salio mal');
            });
    },
    filtroCorreo: (req, res) => {
        const { correo } = req.query
        contacto.find({correo})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(400).send('algo salio mal');
            });
    },
    ver: (req, res) => {
        const id = req.params.id;
        contacto.findOne({status: 1, _id: id})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(400).send('algo salio mal');
            });
    },
    crear: (req, res) => {
        const data = req.body;
        contacto.create(data)
            .then(response => {
                res.send(response);
        })
    },
    actualizar: (req, res) => {
        const id = req.params.id
        const { nombre, correo, telefono, status } = req.body
        contacto.findByIdAndUpdate(id, { nombre, correo, telefono, status })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send("error al actualizar")
        })
    },
    borrar: (req, res) => {
        const id = req.params.id
        const status = 0
        contacto.findByIdAndUpdate(id, { status })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send("error al borrar")
        })
    }
}

//find, findOne, findById, create, save

// SELECT * from contactos  