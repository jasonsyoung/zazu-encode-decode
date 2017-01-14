const expect = require('chai').expect;
const encoder = require('../src/encode')();

describe('encode', () => {
    it('encodes hello str', () => {
      encoder('hello').then((results) => {
        expect(results[0].title).to.include('hello');
        expect(results[1].title).to.include('hello');
        expect(results[2].title).to.include('aGVsbG8=');
      });
    });

     it('encodes html entities', () => {
      encoder('&').then((results) => {
        expect(results[0].title).to.include('%26');
        expect(results[1].title).to.include('&amp;');
      });
    });
});
