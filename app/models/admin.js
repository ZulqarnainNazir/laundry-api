const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: String,
  email: String,
  number: String,
  password: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


UserSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('Admin', UserSchema);
