const express = require('express');
var OAuth = require('oauth');
const app = express();

app.get('/api/cities', function (req, res) {
    
    const header = {
        "X-Yahoo-App-Id": "NXz1Ot62"
    };
    const request = new OAuth.OAuth(
        null,
        null,
        'dj0yJmk9aVhaaWFCc09MRmh1JmQ9WVdrOVRsaDZNVTkwTmpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWI4',
        '795f6151eaf6f8680feb4ce2d4759494c602adde',
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );
    request.get(
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${req.query.city},ca&format=json`,
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
            } else {
                res.send(data);
            }
        }
    );
})

app.listen(5000);