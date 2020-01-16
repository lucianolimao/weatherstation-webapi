const mongoose = require('mongoose')

const weatherModelSchema = new mongoose.Schema({
        "createdDate": {
          "type": "Date",
          "default": Date.now
        },
        "station": {
          "mac": {
            "type": "String"
          }
        },
        "coord": {
          "lon": {
            "type": "Number"
          },
          "lat": {
            "type": "Number"
          }
        },
        "weather": {
          "temperature": {
            "value": {
              "type": "Number"
            },
            "unit": {
              "type": "String"
            }
          },
          "humidity": {
            "value": {
              "type": "Number"
            },
            "unit": {
              "type": "String"
            }
          },
          "pressure": {
            "value": {
              "type": "Number"
            },
            "unit": {
              "type": "String"
            }
          },
          "wind": {
            "value": {
              "type": "Number"
            },
            "unit": {
              "type": "String"
            },
            "direction": {
              "type": "String"
            }
          }
        }
})

module.exports = mongoose.model('WeatherModel', weatherModelSchema)