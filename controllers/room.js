const m = require('../models');

function index(req, res) {
  const where = {}
  where.id = req.query.RoomId
  m.Room.findAll({where})
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

function update(req, res) {
  m.Room.update(req.body.input, { where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

function destroy(req, res) {
  m.Room.destroy({ where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}
function create(req, res) {
  m.Room.create(req.body.input)
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

module.exports = {
  index, update, destroy, create,
};
