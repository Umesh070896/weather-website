const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=786cc06f82509e0abb53e600897dcd6d&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast