'use strict'

module.exports = (app) => {
  const catLadyApp = require('../controllers/catController')

  app.route('/cats')
    .get(catLadyApp.getCats)
    .post(catLadyApp.createCat)

  app.route('/cats/:catId')
    .get(catLadyApp.getCat)
    .put(catLadyApp.updateCat)
    .delete(catLadyApp.deleteCat)
}
