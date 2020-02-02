import Mail from '../../lib/Mail'

class UpdatePlanMail {
  get key() {
    return 'UpdatePlanMail'
  }

  async handle({ data }) {
    const { student_name, student_email, plan_title, start_date, end_date, price } = data

    await Mail.sendMail({
      to: `${student_name} <${student_email}>`,
      subject: 'Seu plano Gympoint mudou!',
      template: 'update-plan',
      context: {
        student_name,
        student_email,
        plan_title,
        start_date,
        end_date,
        price,
      },
    })
  }
}

export default new UpdatePlanMail()
