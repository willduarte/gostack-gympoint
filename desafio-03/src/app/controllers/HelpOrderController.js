import HelpOrder from '../models/HelpOrder'
import Student from '../models/Student'

import AnsweredHelpOrderMail from '../jobs/AnsweredHelpOrderMail'
import Queue from '../../lib/Queue'

class HelpOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: { student_id: req.params.id },
    })

    return res.json(helpOrders)
  }

  async store(req, res) {
    const isValid = await HelpOrder.validateUser(req.body)

    if (!isValid) {
      return res.status(422).json({ error: 'Invalid input' })
    }

    const { question } = req.body
    const helpOrder = await HelpOrder.create({ student_id: req.params.id, question })

    return res.json(helpOrder)
  }

  async update(req, res) {
    const isValid = await HelpOrder.validateAdmin(req.body)

    if (!isValid) {
      return res.status(422).json({ error: 'Invalid input' })
    }

    const { answer } = req.body
    const helpOrder = await HelpOrder.findByPk(req.params.id, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    })

    await helpOrder.update({ answer, answered_at: new Date() })

    await Queue.add(AnsweredHelpOrderMail.key, {
      student: helpOrder.student,
      question: helpOrder.question,
      answer,
    })

    return res.json(helpOrder)
  }
}

export default new HelpOrderController()
