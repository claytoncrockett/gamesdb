var express = require('express');
var router = express.Router();
var Game = require('../models').Game;

/* GET home page. */
router.get('/', function(req, res) {
  Game.all(
    {
      order: [
        ['createdAt', 'ASC']
      ]
    }
  )
    .then(function(games){
      res.render('games', { games: games })
    })
})

router.get('/:id/edit', function(req, res){
  Game.findById(req.params.id)
  .then( function(game){
    return res.render('edit', {game: game})
  })
})

/* PUT /games/7 */
router.put('/:id', function(req, res){
  Game.update(
    { title: req.body.title}, 
    {where: {id: req.params.id}}
  )
  .then( function() {
    return res.redirect('/games')
  })
})

/* POST /games */
router.post('/', function(req, res){
  var title = req.body.title
  //game.create({title: req.body.title})
  Game.create({ title: title })
  .then(function(){
    res.redirect('/games')
  })
})

/* DELETE /games/1 */
router.delete('/:id', function(req, res){
  Game.findById(req.params.id)
    .then( function(game){
      game.destroy();
      return res.redirect('/games');
    })
  })
module.exports = router;