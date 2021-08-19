const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)
mongoose.set( 'useNewUrlParser', true )
mongoose.set( 'useFindAndModify', false)


mongoose.connect(process.env.MONGO_URI,(err)=>{
    if(err){
        throw(err)
    }
})

let conn = mongoose.connection
module.exports={
    mongo_conn: conn
}