module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.TEXT,
        },
        birthOfDate: {
            type: Sequelize.DATE,
        },
        placeOfBirth: {
            type: Sequelize.STRING,
        },
        gender: {
            type: Sequelize.STRING,
        },
        university: {
            type: Sequelize.STRING,
        },
    }, {
        tableName: 'User'
    })
    return User;
}