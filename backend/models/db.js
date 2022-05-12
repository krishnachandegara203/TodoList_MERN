const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/todoDB',{    
    useNewUrlParser : true,
  
}, err => {
    if(err) console.log(`DB not Connected ${err}`)
    console.log(`MongoDB Connected...`)
})