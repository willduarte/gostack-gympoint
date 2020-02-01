import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'
import * as Yup from 'yup'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )

    return this
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash)
  }

  static validate(fields) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    })

    return schema.isValid(fields)
  }
}

export default User
