const express = require('express')
const server = express()
const projects = []

server.use(express.json())

// Middlewares
function countRequests(req, res, next) {
  console.count('Requisições até o momento')

  return next()
}

server.use(countRequests)

function checkProjectExists(req, res, next) {
  const { id } = req.params
  const project = projects.find(p => p.id == id)

  if (!project) return res.status(404).json({ error: 'Project not found' })

  return next()
}

// Lista todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects)
})

// Cria um novo projeto
server.post('/projects', (req, res) => {
  const { id, title } = req.body

  const project = { id, title, tasks: [] }

  projects.push(project)

  return res.json(project)
})

// Edita um projeto
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(p => p.id == id)

  project.title = title

  return res.json(project)
})

// Exclui um projeto
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(p => p.id == id)

  projects.splice(projectIndex, 1)

  return res.json({ success: true })
})

// Cria uma atividade em um projeto
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(p => p.id == id)
  project.tasks.push(title)

  return res.json(project)
})

server.listen(3333)
