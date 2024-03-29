const mongoose = require('mongoose');

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGODB_URI,{
    useUnifiedTopology :true,
    useNewUrlParser:true
})
.then(db => console.log('Database is Connected'))
.catch(err => console.log(err));
