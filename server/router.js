const router = require('express').Router();
const User = require('./routes/user');
const Lobby = require('./routes/lobby')

//lobby routes
router.get('/lobby', Lobby.getUserBoards);
router.post('/lobby', Lobby.createBoard);
router.delete('/lobby', Lobby.deleteBoard);
router.put('/lobby', Lobby.editBoard);

//board routes

//list routes

//task routes

//user routes
router.get('/usernames', User.getUsernames)
//Create new user
router.post('/signup', User.postUser);

module.exports = router;
