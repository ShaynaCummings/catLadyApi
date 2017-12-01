const expect = require('chai').expect;
const nock = require('nock');
const fetch = require('isomorphic-fetch');
const Cat = require('../../models/catModel');
const catController = require('../../controllers/catController');

const response = [
  {
    _id: '1234',
    name: 'kitty',
    type: 'tiger',
    color: 'grey',
  },
  {
    _id: '4321',
    name: 'bruce',
    type: 'tiger',
    color: 'grey',
  },
  {
    _id: '9090',
    name: 'lucy',
    type: 'calico',
    color: 'multi',
  },
];

before(() => {
  nock('http://localhost:3000')
    .get('/cats')
    .reply(200, response);
});

after(() => {
  nock.cleanAll();
});

describe('Routes', () => {
  describe('/cats', () => {
    it('should return all the cats', () => fetch('http://localhost:3000/cats')
      .then(response => response.json())
      .then((json) => {
        expect(json[0]._id).to.equal(response[0]._id);
      }));
  });
});
