
const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('User', {
      id: DataTypes.INTEGER,
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
    }, {
      timestamps: false,
      tableName: 'users',
      underscored: true
    })

    // CourseTable.associate = ({ Student }) => {
    //   CourseTable.hasMany(Student, {
    //     foreignKey: 'id_course'
    //   })
    // }

  return UserTable;
};

module.exports = UserSchema
