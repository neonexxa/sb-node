/* eslint-disable max-nested-callbacks */
const _ = require('lodash');
const m = require('../models');

function index(req, res) {
  const where = req.query;
  m.Experience.withFilter(where)
    .then((exps) => {
      const data = {};
      _(exps).groupBy('UserId').forEach((userexp, UserId) => {
        data[UserId] = {
          wins: userexp.filter(o => o.state === 'win').length,
          exp_points: _.sumBy(userexp, 'value'),
        };
      });
      res.json({ data });
    })
    .catch(error => res.status(500).send({ error }));
}

function update(req, res) {
  m.Experience.update(req.body.input, { where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

function destroy(req, res) {
  m.Experience.destroy({ where: { id: req.params.id } })
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}
function create(req, res) {
  m.Experience.create(req.body.input)
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).send({ error }));
}

module.exports = {
  index, update, destroy, create,
};
