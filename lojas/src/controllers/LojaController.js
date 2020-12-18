const knex = require("../infra/db");

module.exports = {
  async create(req, res) {
    const loja = req.body;

    await knex('lojas').insert(loja);
    return res.send('cadastrou com sucesso').status(200)
  },

  async getAll(req, res) {
     const loja = await knex.select().table('lojas')

     return res.send({'data': loja}).status(200)
   },
  
};
