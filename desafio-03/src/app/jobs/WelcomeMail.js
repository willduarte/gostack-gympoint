import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import Mail from '../../lib/Mail'

class WelcomeMail {
  get key() {
    return 'WelcomeMail'
  }

  async handle({ data }) {
    const { student_name, student_email, plan_title, start_date, end_date, price } = data

    await Mail.sendMail({
      to: `${student_name} <${student_email}>`,
      subject: 'Bem vindo(a) ao Gympoint!',
      template: 'welcome',
      context: {
        student_name,
        student_email,
        plan_title,
        start_date: format(parseISO(start_date), 'dd-MM-yyyy', { locale: pt }),
        end_date: format(parseISO(end_date), 'dd-MM-yyyy', { locale: pt }),
        price,
      },
    })
  }
}

export default new WelcomeMail()
