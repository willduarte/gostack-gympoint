import { setDay, startOfDay, endOfDay } from 'date-fns'
import { Op } from 'sequelize'

import Checkin from '../models/Checkin'

class CheckinController {
  async index(req, res) {
    const checkins = await Checkin.findAll({
      where: { student_id: req.params.id },
    })

    return res.json(checkins)
  }

  async store(req, res) {
    const startDate = setDay(new Date(), -7)
    const endDate = new Date()
    const student_id = req.params.id

    const latestCheckinsCount = await Checkin.count({
      where: {
        student_id,
        created_at: {
          [Op.between]: [startOfDay(startDate), endOfDay(endDate)],
        },
      },
    })

    if (latestCheckinsCount >= 5) {
      return res.status(500).json({ error: "Can't check-in, you neeed a rest :)" })
    }

    const checkin = await Checkin.create({
      student_id,
    })

    return res.json(checkin)
  }
}

export default new CheckinController()
