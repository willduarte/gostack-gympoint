import Bee from 'bee-queue'
import WelcomeMail from '../app/jobs/WelcomeMail'
import UpdatePlanMail from '../app/jobs/UpdatePlanMail'
import AnsweredHelpOrderMail from '../app/jobs/AnsweredHelpOrderMail'

import redisConfig from '../config/redis'

const jobs = [WelcomeMail, UpdatePlanMail, AnsweredHelpOrderMail]

class Queue {
  constructor() {
    this.queues = {}

    this.init()
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      }
    })
  }

  add(key, jobData) {
    return this.queues[key].bee.createJob(jobData).save()
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key]

      bee.on('failed', this.handleFailure).process(handle)
    })
  }

  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err)
  }
}

export default new Queue()
