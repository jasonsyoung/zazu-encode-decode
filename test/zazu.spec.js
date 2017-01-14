const expect = require('chai').expect;
const zazu = require('../zazu.json');

describe('zazu.json', () => {
  it('is valid', () => {
    expect(zazu).to.be.an('object');
  });
});
