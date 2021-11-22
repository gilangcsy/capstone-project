const db = require('../models');
const User = db.user;
const Op = db.Sequelize.Op;

const bcrypt = require("bcrypt");


exports.read = (req, res) => {
	const { id } = req.query;
	User.findAll({
		where: {
			[Op.or]: [{
				id: {
					[Op.like]: id ? `%${id}%` : `%%`
				},
			}]
		},
		include: [
			{
				model: db.post
			},
		]
	}).then(result => {
		res.status(200).send({
			success: true,
			message: "Get All User Has Been Successfully.",
			data: result
		});
	}).catch(err => {
		res.status(500).send({
			message: err.message || "There is a problem in the server."
		})
	})
}

exports.create = (req, res) => {
	const UserId = 'USR-' + Math.random().toString(36).substr(2, 9);
	const { fullName, email, password, address, birthOfDate, placeOfBirth, gender, university } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

	const user = {
		id: UserId,
		fullName: fullName,
		email: email,
		password: hashedPassword,
		address: address,
		birthOfDate: birthOfDate,
		placeOfBirth: placeOfBirth,
		gender: gender,
		university: university,
	}

	User.create(user)
		.then((data) => {
			res.send({
				success: true,
				message: "User Has Been Added Successfully.",
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
	User.findByPk(id)
		.then(result => {
			if (result) {
				User.destroy({
					where: {
						id: id
					}
				}).then(() => {
					res.status(200).send({
						success: true,
						message: `User ID ${id} Has Been Deleted Successfully.`
					})
				}).catch(err => {
					res.status(500).send({
						message: err.message || "There is a problem in the server."
					})
				})
			} else {
				res.status(400).send({
					message: `User ID ${id} not found!`
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
	User.findByPk(id)
		.then(result => {
			if (result) {
				User.update(req.body, {
					where: {
						id: id
					}
				}).then(() => {
					res.send({
						success: true,
						message: `User ID ${id} Has Been Updated Successfully.`,
					})
				}).catch(err => {
					res.status(500).send({
						message: err.message || "There is a problem in the server."
					})
				})
			} else {
				res.status(400).send({
					message: `User ID ${id} not found!`
				});
			}
		}).catch(err => {
			res.status(500).send({
				message: err.message || "There is a problem in the server."
			})
		})
}