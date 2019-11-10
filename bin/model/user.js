let mongoose  = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name:{type: String, required:true},
    email: {type: String, required:true},
    matnumber:{type: String, required:true},
    school:{type: String, required:true},
    department:{type: String, required:true},
    password:{type: String, required:true}

});

module.exports = mongoose.model('User', userSchema);