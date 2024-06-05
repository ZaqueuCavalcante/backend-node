const express = require("express");
const router = express.Router();

const AgendasController = require("../app/controllers/api/AgendasController");
const TasksController = require("../app/controllers/api/TasksController");
const UsersController = require("../app/controllers/api/UsersController");

// Rotas das Agendas
router.get('/agendas', AgendasController.list)
router.get('/agendas/:id', AgendasController.show)
router.post('/agendas', AgendasController.save)
router.delete('/agendas/:id', AgendasController.remove)
router.put('/agendas/:id', AgendasController.update)

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/:id', TasksController.show)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)

// Rotas dos Users
router.get('/users', UsersController.list)
router.post('/users/login', UsersController.login)
router.get('/users/:id', TasksController.show)
router.post('/users', UsersController.save)
router.delete('/users/:id', UsersController.remove)

router.get('*', function notFound(request, response) {
  return response.status(404).json({ message: 'Página não encontrada' });
});

module.exports = router;
