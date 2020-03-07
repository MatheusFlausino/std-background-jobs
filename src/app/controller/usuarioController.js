const Queue = require('../lib/queue');

module.exports = {
  async store(req, res){
    const { nome, email, telefone } = req.body;

    const usuario = {
      nome,
      email,
      telefone
    };

    try {
      await Queue.add('RegistroUsuario', { usuario });
    } catch (error) {
      console.error(error);
    }

    return res.json(usuario);
  }
}
