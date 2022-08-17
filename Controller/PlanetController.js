const Planet  = require('../models/Planet')

module.exports = {
  async store(req, res) {
    const { name, position } = req.body

    const planet = Planet.create({ name, position })

    return res.json(planet)
  },

  async index(req, res) {
    const Planets = await Planet.findAll()

    res.json({ Planets })
  }
}