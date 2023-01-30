const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((response)=>{
    console.log(`Connection Sucessfull ${response}`);
}).catch((error)=>{
    console.log(`connection failed ${error}`);
})