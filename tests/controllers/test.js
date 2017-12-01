const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');
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

describe('Cats Controller', () => {
  describe('getCats', () => {
    it('should return all cats', () => {
      const stub = sinon.stub(Cat, 'find').returns(response);
      const req = {};
      const res = {
        json(data) {
          done();
        },
      };
      catController.getCats(req, res);
      stub.restore();
    });
    // it('should return no cats if there are none', () => {
    // })
  });

  // describe('createCat', () => {
  //   it('should create a cats', () => {
  //   })
  //   it('should error if unable to create a cat', () => {
  //   })
  // })
  // describe('getCat', () => {
  //   it('should return a specific cat', () => {
  //   })
  //   it('should return an error if it does not exist', () => {
  //   })
  // })
  // describe('updateCat', () => {
  //   it('should update a specific cat', () => {
  //   })
  //   it('should return an error if it does not exist', () => {
  //   })
  // })
  // describe('deleteCat', () => {
  //   it('should delete a specific cat', () => {
  //   })
  //   it('should return an error if it does not exist', () => {
  //   })
  // })
});
