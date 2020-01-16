const express = require('express')
const router = express.Router()
const WeatherModel = require('../models/weatherModel')

// Get all weather
router.get('/', async (req, res) => {
    try{
        const weather = await WeatherModel.findOne().sort({createdDate: -1}).limit(1)
        res.json(weather)
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})

// Get one weather
router.get('/:id', (req, res) => {
})

// Create one weather
router.post('/', async (req, res) => {
    const weather = WeatherModel({
        station: {
            mac: req.body.station.mac
        },
        coord: {
            lon: req.body.coord.lon,
            lat: req.body.coord.lat,
        },
        weather: {
            temperature: {
                value: req.body.weather.temperature.value,
                unit: req.body.weather.temperature.unit
            },
            humidity: {
                value: req.body.weather.humidity.value,
                unit: req.body.weather.humidity.unit
            },
            pressure: {
                value: req.body.weather.pressure.value,
                unit: req.body.weather.pressure.unit
            },
            wind: {
                value: req.body.weather.wind.value,
                unit: req.body.weather.wind.unit,
                direction: req.body.weather.wind.direction
            }            
        }
    })

    try {
    const newWeather = await weather.save()
    res.status(201).json(newWeather)
    } catch (err) {
    res.status(400).json({ message: err.message })
    }
})

module.exports = router