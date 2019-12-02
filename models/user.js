let mongoose  = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcryptjs');

let userSchema = new Schema({
    name:{type: String, required:true},
    email: {type: String, required:true , unique: true},
    matnumber:{type: String, required:true,  unique: true},
    school:{type: String, required:true},
    department:{type: String, required:true},
    password:{type: String, required:true},
    image:{type: String}

});

userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model('User', userSchema);  


module.exports = mongoose.model('User', userSchema);