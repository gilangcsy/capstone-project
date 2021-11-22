const db = require('../models');
const Post = db.post;
const Op = db.Sequelize.Op;
const slugify = require('slugify');

exports.read = (req, res) => {
	const { id } = req.query;
	Post.findAll({
		where: {
			[Op.or]: [{
				id: {
					[Op.like]: id ? `%${id}%` : `%%`
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
	const PostId = 'USR-' + Math.random().toString(36).substr(2, 9);
	const { title, slug, description, type, thumbnail, UserId } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

	const post = {
		id: PostId,
		title: title,
		slug: slugify(slug),
		description: description,
		type: type,
		thumbnail: thumbnail,
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
	Post.findByPk(id)
		.then(result => {
			if (result) {
				Post.update(req.body, {
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