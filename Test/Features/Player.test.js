const db = require('../../models');
const { authenticated_get, authenticated_post, authenticated_delete } = require('./chai-passport-user');
const { sample_player } = require('./SampleData');

async function self_factory(sample_data, quantity = 1) {
  const many_data = [];
  const data = sample_data;
  for (let i = 0; i < quantity; i++) {
    many_data.push(data);
  }
  await db.Player.bulkCreate(many_data);
}

describe('Player Test', () => {
  beforeEach(async () => {
    await db.Player.destroy({ truncate: true });
  });
  it('Gets Player', async () => {
    await self_factory(sample_player, 5);
    const res = await authenticated_get('/api/player');
    res.should.have.status(200);
    res.body.should.have.property('data');
    res.body.data.length.should.equal(5);
  });

  it('Creates Player', async () => {
    const res = await authenticated_post(
      '/api/player',
      {
        data: { input: sample_player },
      },
    );
    res.should.have.status(200);
  });

  it('Update Player', async () => {
    const player = await db.Player.create(sample_player);
    const res = await authenticated_post(
      `/api/player/${player.id}`,
      {
        data: { input: { state: 'confirmed' } },
      },
    );
    res.should.have.status(200);
    await player.reload();
    player.state.should.equal('confirmed');
  });

  it('Reject Application/ Reject Invitation Player', async () => {
    const player = await db.Player.create(sample_player);
    const rows_before = await db.Player.findAll();
    rows_before.length.should.equal(1);
    const res = await authenticated_delete(`/api/player/${player.id}`);
    res.should.have.status(200);
    const rows_after = await db.Player.findAll();
    rows_after.length.should.equal(0);
  });
});
