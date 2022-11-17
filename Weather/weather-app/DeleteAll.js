const Record = require('./models/weatherModel');

Record.deleteMany ({}, function (err) {
    if (err) return handleError(err);
    //deleted at most one tank document

});