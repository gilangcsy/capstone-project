const controller = require('../controllers/auth.controller');
const API = require('../configs/credentials.config');

module.exports = app => {

	let router = require('express').Router();

	router.post('/', controller.login);
	router.post('/logout', controller.logout);

	app.use(`${API.VERSION}/auth`, router);
}