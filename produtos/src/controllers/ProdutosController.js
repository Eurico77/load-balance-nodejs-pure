const knex = require("../infra/db");

module.exports = {
  async create(req, res) {
    const produto = req.body;

    await knex('produtos').insert(produto);
    return res.send('foi cadastrado com sucesso').status(200)
  },

  async getAll(req, res) {
     const produto = await knex.select().table('produtos')

     return res.send({'data': produto}).status(200)
   },
  
};
