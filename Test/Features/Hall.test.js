const db = require('../../models');
const { authenticated_get, authenticated_post } = require('./chai-passport-user');
const { sample_hall } = require('./SampleData');

async function self_factory(sample_data, quantity = 1) {
  const many_data = [];
  const data = sample_data;
  for (let i = 0; i < quantity; i++) {
    many_data.push(data);
  }
  await db.Hall.bulkCreate(many_data);
}

describe('Hall Test', () => {
  it('Gets Hall', async () => {
    await db.Hall.destroy({ truncate: true });
    await self_factory(sample_hall, 5);
    const res = await authenticated_get('/api/hall');
    res.should.have.status(200);
    res.body.should.have.property('data');
    res.body.data.length.should.equal(5);
  });

  it('Creates Hall', async () => {
    const res = await authenticated_post(
      '/api/hall',
      {
        data: { input: sample_hall },
      },
    );
    res.should.have.status(200);
  });

  it('Update Hall', async () => {
    const hall = await db.Hall.create(sample_hall);
    const res = await authenticated_post(
      `/api/hall/${hall.id}`,
      {
        data: { input: { address: 'vvv' } },
      },
    );
    res.should.have.status(200);
    await hall.reload();
    hall.address.should.equal('vvv');
  });
});
