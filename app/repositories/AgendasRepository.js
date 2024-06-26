const Agenda = require('../models/Agenda');

function AgendasRepository() {

  async function list() {
    const agendas = await Agenda.findAll({ raw: true });
    return agendas;
  }

  async function find(id) {
    const agenda = await Agenda.findByPk(id);
    return agenda;
  }

  async function save(dados) {
    const agenda = {
      nome: dados.nome,
      celular: dados.celular,
      email: dados.email,
      rua: dados.rua,
      numero: dados.numero,
      bairro: dados.bairro,
      cidade: dados.cidade,
      estado: dados.estado,
      cep: dados.cep,
      complemento: dados.complemento,
    }

    const created = await Agenda.create(agenda);
    return created;
  }

  async function update(id, dados) {
    const agenda = {
      nome: dados.nome,
      celular: dados.celular,
      email: dados.email,
      rua: dados.rua,
      numero: dados.numero,
      bairro: dados.bairro,
      cidade: dados.cidade,
      estado: dados.estado,
      cep: dados.cep,
      complemento: dados.complemento,
    }

    const updated = await Agenda.update(agenda, { where: { id: id } });
    return updated;
  }

  async function remove(id) {
    await Agenda.destroy({ where: { id: id } });
  }

  return {
    list,
    find,
    save,
    update,
    remove,
  }
}

module.exports = AgendasRepository();
