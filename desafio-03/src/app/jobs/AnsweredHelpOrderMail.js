import Mail from '../../lib/Mail'

class AnsweredHelpOrderMail {
  get key() {
    return 'AnsweredHelpOrderMail'
  }

  async handle({ data }) {
    const { student, question, answer } = data

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Seu pedido de ajuda no Gympoint obteve uma resposta!',
      template: 'answer-help-order',
      context: {
        student_name: student.name,
        student_email: student.email,
        question,
        answer,
      },
    })
  }
}

export default new AnsweredHelpOrderMail()
