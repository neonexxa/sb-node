const db = require('../../models');
const { authenticated_get, authenticated_post, authenticated_delete } = require('./chai-passport-user');
const { sample_experience } = require('./SampleData');

async function self_factory(sample_data, quantity = 1) {
  const many_data = [];
  const data = sample_data;
  for (let i = 0; i < quantity; i++) {
    many_data.push(data);
  }
  await db.Experience.bulkCreate(many_data);
}

describe('Experience Test', () => {
  beforeEach(async () => {
    await db.Experience.destroy({ truncate: true });
  });
  it('Gets Experience', async () => {
    await self_factory({ ...sample_experience, UserId: 99 });
    await self_factory({ ...sample_experience, UserId: 98 });
    const res = await authenticated_get('/api/experience');
    res.should.have.status(200);
    res.body.should.have.property('data');
    res.body.data['99'].should.have.property('wins');
    res.body.data['99'].should.have.property('exp_points');
    res.body.data['98'].should.have.property('wins');
    res.body.data['98'].should.have.property('exp_points');
  });

  it('Creates Experience', async () => {
    const res = await authenticated_post(
      '/api/experience',
      {
        data: { input: sample_experience },
      },
    );
    res.should.have.status(200);
  });

  it('Delete Experience', async () => {
    const experience = await db.Experience.create(sample_experience);
    const rows_before = await db.Experience.findAll();
    rows_before.length.should.equal(1);
    const res = await authenticated_delete(`/api/experience/${experience.id}`);
    res.should.have.status(200);
    const rows_after = await db.Experience.findAll();
    rows_after.length.should.equal(0);
  });
});
