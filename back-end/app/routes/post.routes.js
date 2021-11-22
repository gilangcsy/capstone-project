const controller = require('../controllers/post.controller');
const API = require('../configs/credentials.config');

module.exports = app => {

	let router = require('express').Router();

	router.get('/', controller.read);
	router.post('/', controller.upload.single('thumbnail'), controller.create);
	router.delete('/:id', controller.delete);
    router.patch('/:id', controller.update);

	app.use(`${API.VERSION}/posts`, router);
}