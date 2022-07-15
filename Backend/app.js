const express= require('express');
const cors = require('cors');
const TestimonialData = require('./src/model/Testimonialdata');
var app = new express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Backend root
app.get('/', (req, res) => {
    res.send('hello world')
  });
 
//getting data from db
app.get('/testimonials',function(req,res){   
  TestimonialData.find()
              .then(function(testimonial){
                  res.send(testimonial);
              });
});
// Connecting with server
app.listen(3000, function(){
    console.log('listening to port 3000');
});