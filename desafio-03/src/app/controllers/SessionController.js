import jwt from 'jsonwebtoken'

import User from '../models/User'
import authConfig from '../../config/auth'

class SessionController {
  async store(req, res, next) {
    const isValid = await User.validate(req.body)

    if (!isValid) {
      return res.status(422).json({ error: 'Invalid input' })
    }

    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(422).json({ error: 'User not found' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(422).json({ error: 'Wrong password' })
    }

    const { id, name } = user

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()
