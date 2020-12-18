const { Router }  = require('express')
const LojaController = require('./controllers/LojaController')

const routes = Router()

routes.post('/lojas', LojaController.create)
routes.get('/lojas', LojaController.getAll)


module.exports =  routes;