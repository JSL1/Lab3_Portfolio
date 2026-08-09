var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');
let projectsController = require('../controllers/projects');
var referencesController = require('../controllers/references');
var servicesController = require('../controllers/services');
var usersController = require('../controllers/users');
const projects = require('../models/projects');
const references = require('../models/references');
const services = require('../models/services');
const users = require('../models/users');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', indexController.welcome);
router.get('/hello', indexController.sayHello);
router.get('/bye', indexController.sayBye);

//projects 
router.get('/projects/', projectsController.getAll);
router.get('/projects/:id', projectsController.getById);
router.post('/projects/', authMiddleware, projectsController.add);
router.put('/projects/:id', authMiddleware, projectsController.update);
router.delete('/projects/:id', authMiddleware, projectsController.remove);

//references
router.get('/references/', referencesController.getAll);
router.get('/references/:id', referencesController.getById);
router.post('/references/', authMiddleware, referencesController.add);
router.put('/references/:id', authMiddleware, referencesController.update);
router.delete('/references/:id', authMiddleware, referencesController.remove);

//services
router.get('/services/', servicesController.getAll);
router.get('/services/:id', servicesController.getById);
router.post('/services/', authMiddleware, servicesController.add);
router.put('/services/:id', authMiddleware, servicesController.update);
router.delete('/services/:id', authMiddleware, servicesController.remove);

//users
router.get('/users/', usersController.getAll);
router.get('/users/:id', usersController.getById);
router.post('/users/', usersController.add);
router.put('/users/:id', authMiddleware, usersController.update);
router.delete('/users/:id', authMiddleware, usersController.remove);

module.exports = router;