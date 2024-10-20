const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = Schema({
    name: {
        type: String,
        require: true,
    }

})
