const m = require('../models');

function index(req, res) {
  m.Hall.findAll()
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

function update(req, res) {
  m.Hall.update(req.body.input, { where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

function destroy(req, res) {
  m.Hall.destroy({ where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}
function create(req, res) {
  m.Hall.create(req.body.input)
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

module.exports = {
  index, update, destroy, create,
};
