const m = require('../models');

function index(req, res) {
  m.Match.findAll()
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

function update(req, res) {
  m.Match.update(req.body.input, { where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

function destroy(req, res) {
  m.Match.destroy({ where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}
function create(req, res) {
  m.Match.create(req.body.input)
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

module.exports = {
  index, update, destroy, create,
};
