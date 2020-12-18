const { Router }  = require('express')
const ProdutosController = require('./controllers/ProdutosController')

const routes = Router()

routes.post('/produtos', ProdutosController.create)
routes.get('/produtos', ProdutosController.getAll)


module.exports =  routes;