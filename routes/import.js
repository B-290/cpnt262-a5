
const express = require('express');
const { request } = require('http');
const newArray = require('../../data/gallery');
var mongoose=require('mongoose');
  
var StudentSchema = new mongoose.Schema({
    StudentId:Number,
    Name:String,
    Roll:Number,
    Birthday:Date,
    Address:String
});

