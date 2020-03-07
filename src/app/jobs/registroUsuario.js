const { connection } = require('../lib/db')

module.exports = {
  key: 'RegistroUsuario',
  async handle({ data }) {
    const { usuario } = data;
    await connection.insert([{nome: usuario.nome, email: usuario.email, telefone: usuario.telefone}], ['id']).into('usuarios')
  }
};
