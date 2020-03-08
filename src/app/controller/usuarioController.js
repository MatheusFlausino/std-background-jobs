const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const Queue = require('../lib/queue');
const { connection } = require('../lib/db');

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
  },
  async index (req, res){
    const Usuarios = connection('usuarios');

    const data = await Usuarios.select();

    res.json({ data });
  },
  async show (req, res){
    const { params } = req

    const Usuarios = connection('usuarios');

    const data = await Usuarios.select().where('id', params.id);

    res.json({ data });
  },
  async upload(req, res){
    const { file } = req

    fs.createReadStream(path.resolve(__dirname, `../../../uploads/${file.filename}`))
    .pipe(csv())
    .on('data', async (usuario) => {
      try {
        await Queue.add('RegistroUsuario', { usuario });
      } catch (error) {
        console.error('Error upload usuario ', error);
      }
    })
    .on('end', (res) => {
      console.error(res);
    })

    res.json({ msg: 'Upload na fila' });
  }
}
