var express = require('express');
var router = express.Router();
var TextModel = require('../../models').Text;

//get all the texts
router.get('/', function(req, res){
  TextModel.findAll().then(function(texts){
    res.json({"texts": texts});
  });
});

router.post('/', function(req, res){

  var text = req.body.text;

  var textInstance = TextModel.build(text);

  textInstance.save().then(function(textInstanceSaved){
    res.json({"text":textInstanceSaved});
  })
  .catch(function(err){
    console.log(err)
    res.status(500).json(null);
  })
});

module.exports = router;
