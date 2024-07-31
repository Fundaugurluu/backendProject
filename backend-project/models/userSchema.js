const mongoose = require("mongoose")
const Schema=mongoose.Schema;
const createUser=new Schema({
    userName: { type : String,required:true,unique :true,trim :true},
    email: { type : String,required:true,unique :true,trim :true},
    password: { type : String,required:true,trim :true},
});

const UserModel = mongoose.model('User',createUser);
module.exports= UserModel;