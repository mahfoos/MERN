const addNewPlayer = require('../controllers/playerControllers');
const getPlayers = require('../controllers/playerControllers');
const getPlayerWithID = require('../controllers/playerControllers');

const routes = (app) => {
    app.route('/players')

    // GET endpoint
    .get(getPlayers)

    // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        .get(getPlayerWithID)
}

module.exports = routes;