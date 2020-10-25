const db = require('../../models');
const { authenticated_get, authenticated_post, authenticated_delete } = require('./chai-passport-user');
const { sample_match } = require('./SampleData');

async function self_factory(sample_data, quantity = 1) {
  const many_data = [];
  const data = sample_data;
  for (let i = 0; i < quantity; i++) {
    many_data.push(data);
  }
  await db.Match.bulkCreate(many_data);
}

describe('Match Test', () => {
  beforeEach(async () => {
    await db.Match.destroy({ truncate: true });
  });
  it('Gets Match', async () => {
    await self_factory(sample_match, 5);
    const res = await authenticated_get('/api/match');
    res.should.have.status(200);
    res.body.should.have.property('data');
    res.body.data.length.should.equal(5);
  });

  it('Creates Match', async () => {
    const res = await authenticated_post(
      '/api/match',
      {
        data: { input: sample_match },
      },
    );
    res.should.have.status(200);
  });

  it('Delete Match', async () => {
    const match = await db.Match.create(sample_match);
    const rows_before = await db.Match.findAll();
    rows_before.length.should.equal(1);
    const res = await authenticated_delete(`/api/match/${match.id}`);
    res.should.have.status(200);
    const rows_after = await db.Match.findAll();
    rows_after.length.should.equal(0);
  });
});
