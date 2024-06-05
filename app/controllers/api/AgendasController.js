const agendasRepository = require("../../repositories/AgendasRepository");

function AgendasController() {

  async function list(req, res) {
    const agendas = await agendasRepository.list();
    res.status(200).json(agendas);
  }

  async function show(req, res) {
    try {
      const agenda = await agendasRepository.find(req.params.id);
      if (!agenda) {
        return res.status(404).send({
          message: "Agenda não encontrada."
        })
      }
      res.status(200).json(agenda);
    } catch (error) {
      res.status(500).json({
        message: "Agenda não encontrada"
      });
    }
  }

  async function save(req, res) {
    try {
      const agenda = await agendasRepository.save({
        nome: req.body.nome,
        celular: req.body.celular,
        email: req.body.email,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        complemento: req.body.complemento,
      });
      res.status(201).json(agenda);
    } catch (error) {
      res.status(400).json(error.details)
    }
  }

  async function update(req, res) {
    const agenda = await agendasRepository.find(req.params.id);
    if (!agenda) {
      return res.status(404).send({
        message: "Agenda não encontrada."
      })
    }
    await agendasRepository.update(req.params.id, {
        nome: req.body.nome,
        celular: req.body.celular,
        email: req.body.email,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        complemento: req.body.complemento,
      }
    );
    res.json({
      message: "Agenda atualizada."
    })
  }

  async function remove(req, res) {
    const agenda = await agendasRepository.find(req.params.id);
    if (!agenda) {
      return res.status(404).send({
        message: "Agenda não encontrada."
      })
    }
    await agendasRepository.remove(req.params.id);
    res.status(200).json({
      message: "Agenda removida."
    })
  }

  return {
    save,
    list,
    show,
    remove,
    update,
  }
}

module.exports = AgendasController();
