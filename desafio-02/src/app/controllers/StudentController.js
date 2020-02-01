import * as Yup from 'yup';

import Student from '../models/Student';

class StudentController {
  async store(req, res, next) {
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
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Invalid input' });
    }

    const { name, email, age, weight, height } = req.body;

    const student = await Student.create({ name, email, age, weight, height });

    return res.json(student);
  }

  async update(req, res, next) {
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
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Invalid input' });
    }

    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const { name, email, age, weight, height } = await student.update(req.body);

    return res.json({
      name,
      email,
      age,
      weight,
      height,
    });
  }
}

export default new StudentController();
