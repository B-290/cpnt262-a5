`use strict`

const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    id:           312,
    title:        "mountain",
    source:       "./public/images/img5",
    fileName:     'static',
    attribution:  {
      source: "./public/images/img5",
      credit: "lorem ipsum",
      URL:  "https://picsum.photos/seed/picsum/200/300",
    }
  }
);