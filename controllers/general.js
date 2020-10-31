const m = require('../models');

function index(req, res) {
  res.json({ message: 'Its Alive' });
}

async function staticdata(req, res) {
  try {
    const data = {};
    data.role = await m.Role.findAll({ raw: true, attributes: ['id', 'name'] });
    data.durations = await m.Duration.findAll({ raw: true, attributes: ['id', 'name', 'value'] });
    data.venues = await m.Hall.findAll({ raw: true });
    data.features = await m.Feature.findAll({ raw: true, attributes: ['id', 'name', 'value'] });
    data.modes = await m.Mode.findAll({ raw: true, attributes: ['id', 'name', 'value'] });
    data.nops = await m.Nop.findAll({ raw: true, attributes: ['id', 'name', 'value'] });
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = { index, staticdata };
