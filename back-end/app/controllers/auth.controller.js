const db = require('../models');
const User = db.user;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/auth.config');

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            success: 'false',
            message: 'Content cannot be empty!'
        });
    } else {
        const { email, password } = req.body;
        User.findOne({
            where: {
                email: email,
            }
        }).then(user => {
            if (!user) {
                res.status(400).send({
                    success: 'false',
                    message: 'Wrong email or password!'
                })
            } else {
                const validatingPassword = bcrypt.compareSync(password, user.password); // true
                if (validatingPassword) {
                    const tokenJwt = jwt.sign({ id: user.id }, config.secret, {
                        expiresIn: 10800 // 24 hours
                    });
                    res.send({
                        success: true,
                        message: "Login has been successfull!",
                        credentials: {
                            accessToken: tokenJwt,
                            UserId: user.id,
                        }
                    })
                } else {
                    res.status(400).send({
                        success: 'false',
                        message: 'Wrong email or password'
                    })
                }
            }
        });
    }
};

exports.logout = (req, res) => {
    const authHeader = req.headers["x-access-token"];
    jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
        if (logout) {
            res.send({ msg: 'You have been Logged Out' });
        } else {
            res.send({ msg: err.message | 'Error' });
        }
    });
}