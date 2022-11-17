require("dotenv").config();
const mongoose = require('mongoose');
const db = process.env.MONGO_DB_URL;

mongoose.connect(db)
.then(()=> {
    console.log("Connected to database");

})

.catch(()=> {
    console.log("Error Connecting to database");
})

const weatherSchema = new mongoose.Schema(
  {
    city: { type: String },
    temperature: { type: String },
    wind: { type: String },
    humidity: { type: String },
    feelsLike: { type: String },
  },
);

const Weather = mongoose.model('weathers',weatherSchema);

module.exports = Weather;