const controller = require('../controllers/user.controller');
const API = require('../configs/credentials.config');

module.exports = app => {

	let router = require('express').Router();

	router.get('/', controller.read);
	router.post('/', controller.create);
	router.delete('/:id', controller.delete);
    router.patch('/:id', controller.update);

	app.use(`${API.VERSION}/users`, router);
}