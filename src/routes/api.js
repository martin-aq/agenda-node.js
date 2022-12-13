// GET / contactos
const express = require('express');
const router = require('express').Router()
const contactosController = require('../controller/contactos');

router.get('/contactos', contactosController.listar);
router.get('/filterName', contactosController.filtroNombre);
router.get('/filterEmail', contactosController.filtroCorreo);
router.get('/seeUser/:id', contactosController.ver);
router.post('/createUser', express.json(), contactosController.crear);
router.put('/updateUser/:id', express.json(), contactosController.actualizar);
router.delete('/deleteUser/:id', contactosController.borrar);

module.exports = router;

// usuario - ui - (route, controller - model) - bdd