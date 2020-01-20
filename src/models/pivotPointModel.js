const mongoose = require('mongoose')

const pivotPointModelSchema = new mongoose.Schema({
        "createdDate": {
          "type": "Date",
          "default": Date.now
        },
        "pivotPoint": {
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
          "soilSensor": {
            "type": [
              "Mixed"
            ]
          }
        }
})

module.exports = mongoose.model('PivotPointModel', pivotPointModelSchema)