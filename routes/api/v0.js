const mongoose = require('mongoose')
const express = require('express');
const gallerySchema = require('../../models/image')

const router = express.Router();

router.get('gallerySchema', (req, res) => {
  gallerySchema.find(function(){

    if (err) {
      res.sendStatus(404);
    }
   
  })
})

router.get('/galleryschema/:slug', (req, res) => {

  Definition.find({slug: req.params.slug},function(err,definition){
    if (err) {
      res.sendStatus(404)
    }
    res.json(gallerySchema);
  })

})


module.exports = gallerySchema;

// const express = require('express');
// const newArray = require('/gallery');
// const router = express.Router();
// const gallery = ('/gallery.js')

// router.get('/gallery', function(request, response){
//  response.json(newArray);
// });

// module.exports = router

// module.exports = router;
// const mongoose = require('mongoose')
// const express = require('express');
// const gallerySchema = require('../../models/image')

// const router = express.Router();

// router.get('gallerySchema', (req, res) => {
//   gallerySchema.find(function(){

//     if (err) {
//       res.sendStatus(404);
//     }
//     `res.json(definitions)`;
//   })
// })

// router.get('/definitions/:slug', (req, res) => {

//   Definition.find({slug: req.params.slug},function(err,definition){
//     if (err) {
//       res.sendStatus(404)
//     }
//     res.json(definition);
//   })

// })

// const express = require('express');
// const newArray = require('/gallery');
// const router = express.Router();
// const gallery = ('/gallery.js')

// router.get('/gallery', function(request, response){
//  response.json(newArray);
// });

// module.exports = router

// module.exports = router;