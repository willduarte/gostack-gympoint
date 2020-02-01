import Sequelize, { Model } from 'sequelize'
import * as Yup from 'yup'

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static validate(fields) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .integer()
        .required(),
      weight: Yup.number()
        .round()
        .required(),
      height: Yup.number()
        .round()
        .required(),
    })

    console.log(schema)
    console.log(fields)

    return schema.isValid(fields)
  }
}

export default Student
