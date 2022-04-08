const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Employee = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    age: {type:Number, required:true},
    mobile: {type:Number, required:true},
    address: {type:String, required:true},
    work: {type:String, required:true},
    description: {type:String, required:true}
})

const user = mongoose.model('empCollection', Employee)
module.exports = user;