import { Router } from 'express'

import SessionController from './app/controllers/SessionController'
import StudentController from './app/controllers/StudentController'

import authenticated from './app/middlewares/authenticated'

const routes = new Router()

routes.post('/sessions', SessionController.store)

routes.use(authenticated)

routes.post('/students', StudentController.store)
routes.put('/students/:id', StudentController.update)

export default routes
