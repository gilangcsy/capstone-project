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
            type: Sequelize.TEXT,
        },
        thumbnail: {
            type: Sequelize.STRING,
        },
    }, {
        tableName: 'Post'
    })
    return Post;
}