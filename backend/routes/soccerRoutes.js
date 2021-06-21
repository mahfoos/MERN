const addNewPlayer = require('../controllers/playerControllers');
const getPlayers = require('../controllers/playerControllers');
const getPlayerWithID = require('../controllers/playerControllers');
const updatePlayer = require('../controllers/playerControllers');
const deletePlayer = require('../controllers/playerControllers');


const routes = (app) => {
    app.route('/players')

    // GET endpoint
    .get(getPlayers)

    // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        // Get specific Player
        .get(getPlayerWithID)

        // update a specific player
        .put(updatePlayer)

        // delete a specific player
        .delete(deletePlayer)
}

module.exports = routes;