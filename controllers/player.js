const m = require('../models');

function index(req, res) {
  m.Player.findAll()
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

function update(req, res) {
  console.log(req.body);
  m.Player.update(req.body.input, { where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

function destroy(req, res) {
  console.log(req.params)
  m.Player.destroy({ where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}
function create(req, res) {
  console.log(req.body);
  m.Player.create(req.body.input)
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

module.exports = {
  index, update, destroy, create,
};
