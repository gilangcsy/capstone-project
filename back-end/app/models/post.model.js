module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('Post', {
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        slug: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.STRING,
        },
        thumbnail: {
            type: Sequelize.STRING,
        },
    }, {
        tableName: 'Post'
    })
    return Post;
}