import Sequelize, { Model } from 'sequelize'
import * as Yup from 'yup'

class HelpOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
        answered_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' })
  }

  static validateUser(fields) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    })

    return schema.isValid(fields)
  }

  static validateAdmin(fields) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    })

    return schema.isValid(fields)
  }
}

export default HelpOrder
