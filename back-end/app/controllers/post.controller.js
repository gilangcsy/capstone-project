const db = require('../models');
const Post = db.post;
const Op = db.Sequelize.Op;
const slugify = require('slugify');

// Import the filesystem module
const fs = require('fs');

//Import and setting up multer
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/images/posts/')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + extension
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

exports.upload = multer({
    storage: storage
})

exports.read = (req, res) => {
	const { id, title } = req.query;
	Post.findAll({
		where: {
			[Op.or]: [{
				id: {
					[Op.like]: id ? `%${id}%` : `%%`
				},
				title: {
					[Op.like]: title ? `%${title}%` : `%%`
				},
			}]
		},
		include: [
			{
				model: db.user
			},
		]
	}).then(result => {
		res.status(200).send({
			success: true,
			message: "Get All Post Has Been Successfully.",
			data: result
		});
	}).catch(err => {
		res.status(500).send({
			message: err.message || "There is a problem in the server."
		})
	})
}

exports.create = (req, res) => {
	const PostId = 'pst-' + Math.random().toString(36).substr(2, 9);
	const { title, description, type, category, UserId } = req.body;

	const post = {
		id: PostId,
		title: title,
		slug: slugify(title.toLowerCase()),
		description: description,
		type: type,
		category: category,
		thumbnail: 'default.jpeg',
		UserId: UserId
	}

	Post.create(post)
		.then((data) => {
			res.send({
				success: true,
				message: "Post Has Been Added Successfully.",
				data: data
			})
		}).catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occured while creating the message.'
			})
		})
}

exports.delete = (req, res) => {
	const id = req.params.id;
	Post.findByPk(id)
		.then(result => {
			if (result) {
				const path = process.cwd() + '/uploads/images/posts/' + result.thumbnail
				fs.unlink(path, (err) => {
					if (err) {
						console.error(err)
						return
					}
				})
				Post.destroy({
					where: {
						id: id
					}
				}).then(() => {
					res.status(200).send({
						success: true,
						message: `Post ID ${id} Has Been Deleted Successfully.`
					})
				}).catch(err => {
					res.status(500).send({
						message: err.message || "There is a problem in the server."
					})
				})
			} else {
				res.status(400).send({
					message: `Post ID ${id} not found!`
				});
			}
		}).catch(err => {
			res.status(500).send({
				message: err.message || "There is a problem in the server."
			})
		})
}

exports.update = (req, res) => {
	const id = req.params.id;
	const { title, description, type, category ,UserId } = req.body;
	Post.findByPk(id)
		.then(result => {
			if (result) {
				const postValue = {
					title: title,
					slug: slugify(title.toLowerCase()),
					description: description,
					type: type,
					category: category,
					UserId: UserId,
					thumbnail: 'default.jpeg',
				}
				Post.update(postValue, {
					where: {
						id: id
					}
				}).then(() => {
					res.send({
						success: true,
						message: `Post ID ${id} Has Been Updated Successfully.`,
					})
				}).catch(err => {
					res.status(500).send({
						message: err.message || "There is a problem in the server."
					})
				})
			} else {
				res.status(400).send({
					message: `Post ID ${id} not found!`
				});
			}
		}).catch(err => {
			res.status(500).send({
				message: err.message || "There is a problem in the server."
			})
		})
}