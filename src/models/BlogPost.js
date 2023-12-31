
const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
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
        as: 'user',
        foreignKey: 'user_id'
      })
    }

  return BlogPostTable;
};

module.exports = BlogPostSchema
