import { parseISO, setMonth } from 'date-fns'

import Enrollment from '../models/Enrollment'
import Student from '../models/Student'
import Plan from '../models/Plan'

class EnrollmentController {
  async index(req, res) {
    const enrollments = await Enrollment.findAll()

    return res.json(enrollments)
  }

  async store(req, res) {
    const isValid = await Enrollment.validate(req.body)

    if (!isValid) {
      return res.status(422).json({ error: 'Invalid input' })
    }

    const { student_id, plan_id, start_date } = req.body

    const student = await Student.findByPk(student_id)
    if (!student) {
      return res.status(404).json({ error: 'Student not found' })
    }

    const plan = await Plan.findByPk(plan_id)
    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' })
    }

    const end_date = setMonth(parseISO(start_date), plan.duration)
    const price = plan.duration * plan.price

    const enrollment = await Enrollment.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    })

    // TODO: Send welcome e-mail to student
    // Quando um aluno realiza uma matrícula ele recebe um e-mail com detalhes da sua inscrição na academia como plano, data de término,
    // valor e uma mensagem de boas-vindas.

    return res.json(enrollment)
  }

  async update(req, res) {
    const isValid = await Enrollment.validate(req.body)

    if (!isValid) {
      return res.status(422).json({ error: 'Invalid input' })
    }

    const { student_id, plan_id, start_date } = req.body

    const student = await Student.findByPk(student_id)
    if (!student) {
      return res.status(404).json({ error: 'Student not found' })
    }

    const plan = await Plan.findByPk(plan_id)
    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' })
    }

    const end_date = setMonth(parseISO(start_date), plan.duration)
    const price = plan.duration * plan.price

    const enrollment = await Enrollment.findByPk(req.params.id)
    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' })
    }

    await enrollment.update({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    })

    // TODO: Send update e-mail to student
    // Quando a matrícula do aluno é atualizada, enviar e-mail com a nova data final e novo valor.

    return res.json({ student_id, plan_id, start_date, end_date, price })
  }

  async delete(req, res) {
    await Enrollment.destroy({ where: { id: req.params.id } })

    return res.status(200).json({ success: true })
  }
}

export default new EnrollmentController()
