
const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER
    }, {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true
    })

    PostCategoryTable.associate = ({ Category, BlogPost}) => {
        Category.belongsToMany(BlogPost, {
            as: 'categories',
            through: PostCategoryTable,
            foreignKey: 'category_id',
            otherKey: 'post_id'
        })

        BlogPost.belongsToMany(Category, {
            as: 'posts',
            through: PostCategoryTable,
            foreignKey: 'post_id',
            otherKey: 'category_id'
        })

    }

    return PostCategoryTable

}

module.exports = PostCategorySchema
