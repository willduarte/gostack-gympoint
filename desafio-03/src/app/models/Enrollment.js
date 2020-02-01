import Sequelize, { Model } from 'sequelize'
import * as Yup from 'yup'

class Enrollment extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' })
    this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' })
  }

  static validate(fields) {
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .integer()
        .required(),
      plan_id: Yup.number()
        .integer()
        .required(),
      start_date: Yup.date().required(),
    })

    return schema.isValid(fields)
  }
}

export default Enrollment
