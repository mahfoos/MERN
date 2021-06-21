const mongoose = require('mongoose');
const PlayerSchema = require('../models/playerModels');

const Player = mongoose.model('Player', PlayerSchema);

const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if (err){
            res.send(err);
        }
        res.json(Player);
    })
}

const getPlayers = (req, res) => {
    Player.find({}, (err, Player) => {
        if (err){
            res.send(err);
        }
        res.json(Player);
    })
}

const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId, (err, Player) => {
        if (err){
            res.send(err);
        }
        res.json(Player);
    })
}

module.exports = addNewPlayer;
module.exports = getPlayers;
module.exports = getPlayerWithID;