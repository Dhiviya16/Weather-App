const Weather = require('./models/weatherModel');
Weather.deleteOne ({city:
'London'}, function (err) {
    if (err) return handleError(err);
    //deleted at most one tank document

});