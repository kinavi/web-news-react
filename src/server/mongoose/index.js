export const mongoose = require('mongoose');

const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const NewsScheme = new Schema(
    {
      userId: String,
      title: String,
      description: Object,
      fileName: String,
      author: String,
      dateCreate: Date,
    }, {versionKey: false});

export const News = mongoose.model('News', NewsScheme);

const UsersSchema = new Schema({
  login: String,
  email: String,
  hash: String,
  salt: String,
});

UsersSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UsersSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    login: this.login,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'misha');
};

UsersSchema.methods.toAuthJSON = function() {
  return {
    id: this._id,
    login: this.login,
    token: this.generateJWT(),
  };
};

export const Users = mongoose.model('Users', UsersSchema);
