
const CategorySchema = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define('Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING
    }, {
      timestamps: false,
      tableName: 'categories',
      underscored: true
    })

    // CourseTable.associate = ({ Student }) => {
    //   CourseTable.hasMany(Student, {
    //     foreignKey: 'id_course'
    //   })
    // }

  return CategoryTable;
};

module.exports = CategorySchema
