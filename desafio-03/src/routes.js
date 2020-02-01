import { Router } from 'express'

import SessionController from './app/controllers/SessionController'
import StudentController from './app/controllers/StudentController'
import PlanController from './app/controllers/PlanController'
import EnrollmentController from './app/controllers/EnrollmentController'
import CheckinController from './app/controllers/CheckinController'
import HelpOrderController from './app/controllers/HelpOrderController'

import authenticated from './app/middlewares/authenticated'

const routes = new Router()

routes.post('/sessions', SessionController.store)

routes.get('/students/:id/checkins', CheckinController.index)
routes.post('/students/:id/checkins', CheckinController.store)

routes.get('/students/:id/help-orders', HelpOrderController.index)
routes.post('/students/:id/help-orders', HelpOrderController.store)

// Authentication required
routes.use(authenticated)

routes.post('/students', StudentController.store)
routes.put('/students/:id', StudentController.update)

routes.get('/plans', PlanController.index)
routes.post('/plans', PlanController.store)
routes.put('/plans/:id', PlanController.update)
routes.delete('/plans/:id', PlanController.delete)

routes.get('/enrollments', EnrollmentController.index)
routes.post('/enrollments', EnrollmentController.store)
routes.put('/enrollments/:id', EnrollmentController.update)
routes.delete('/enrollments/:id', EnrollmentController.delete)

routes.put('/help-orders/:id/answer', HelpOrderController.update)

export default routes
