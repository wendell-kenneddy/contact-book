const express = require('express');
const ContactController = require('./controllers/ContactController');
const DashboardController = require('./controllers/DashboardController');
const routes = express.Router();

routes.get('/', DashboardController.getRoute);
routes.get('/contact', ContactController.getRoute);
routes.post('/contact', ContactController.post);
routes.post('/contact/delete/:id', ContactController.postDelete);
routes.get('/contact/edit/:id', ContactController.getEditRoute);
routes.post('/contact/edit/:id', ContactController.postEditRoute);

module.exports = routes;
