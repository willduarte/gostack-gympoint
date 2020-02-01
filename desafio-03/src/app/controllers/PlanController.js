import Plan from '../models/Plan'

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll()

    return res.json(plans)
  }

  async store(req, res) {
    const isValid = await Plan.validate(req.body)

    if (!isValid) {
      return res.status(422).json({ error: 'Invalid input' })
    }

    const { title, duration, price } = req.body
    const plan = await Plan.create({ title, duration, price })

    return res.json(plan)
  }

  async update(req, res) {
    const isValid = await Plan.validate(req.body)

    if (!isValid) {
      return res.status(422).json({ error: 'Invalid input' })
    }

    const plan = await Plan.findByPk(req.params.id)

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' })
    }

    const { title, duration, price } = await plan.update(req.body)

    return res.json({ title, duration, price })
  }

  async delete(req, res) {
    await Plan.destroy({ where: { id: req.params.id } })

    return res.status(200).json({ success: true })
  }
}

export default new PlanController()
