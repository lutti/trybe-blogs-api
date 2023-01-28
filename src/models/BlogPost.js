
const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define('BlogPost', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE
    }, {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true
    })

    BlogPostTable.associate = ({ User }) => {
        BlogPostTable.belongsTo(User, {
        foreignKey: 'user_id'
      })
    }

  return BlogPostTable;
};

module.exports = BlogPostSchema
