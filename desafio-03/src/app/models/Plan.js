import Sequelize, { Model } from 'sequelize'
import * as Yup from 'yup'

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static validate(fields) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .integer()
        .required(),
      price: Yup.number()
        .round()
        .required(),
    })

    return schema.isValid(fields)
  }
}

export default Plan
