const m = require('../models');

function index(req, res) {
  const where = {};
  if (req.query.RoomId) where.id = req.query.RoomId;
  m.Room.findAll({ where, raw: true })
    .then(async (rooms) => {
      let data = rooms;
      if (where.id) {
        let matches = [];
        let players = [];
        try {
          const UserM = {
            model: m.User,
            raw: true,
          };
          matches = await m.Match.findAll({ where: { RoomId: where.id }, raw: true });
          players = await m.Player.findAll({
            where: { RoomId: where.id },
            raw: true,
            include: [
              UserM,
            ],
          });
        } catch (error) {
          res.status(500).send({ error });
        }
        data = { ...rooms[0], matches, players };
      }
      console.log(data);
      res.json({ data });
    })
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
  console.log(req.body.input);
  m.Room.create(req.body.input)
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

module.exports = {
  index, update, destroy, create,
};
