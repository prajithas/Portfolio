const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PortfolioDb',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Schema = mongoose.Schema;

var NewTestimonialSchema = new Schema({
    Message:String,
    clientName:String,
    clientPosition:String,
    Date:String,
    ImageUrl:String
});

var Testimonialdata = mongoose.model('Testimonial', NewTestimonialSchema,'testimonial'); 
module.exports = Testimonialdata;
