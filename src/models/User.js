
const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
    }, {
      timestamps: false,
      tableName: 'users',
      underscored: true
    })

    UserTable.associate = ({ BlogPost }) => {
      UserTable.hasMany(BlogPost, {
        foreignKey: 'user_id'
      })
    }

  return UserTable;
};

module.exports = UserSchema
