var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var linkSchema = new Schema({
  visits: Number,
  link: String,
  title: String,
  code: String,
  base_url: String,
  url: String
});

var Link = mongoose.model('Link', linkSchema);

linkSchema.pre('save', function(next){
  // add the shorting and saving here?
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = Link;
