const Satelite = require('../models/Satelite')
const Planet = require('../models/Planet')

module.exports = {
  async store(req, res) {
    const { planetId } = req.params
    const { name, serial_number } = req.body

    const planet = await Planet.findByPk(planetId)

    if(!planet) {
      return res.send('Planet does not exist!')
    }

    const satelite = await Satelite.create({
      name,
      serial_number,
      planetId
    })

    return res.json({ satelite })
  },

  async index(req, res) {
    const { planetId } = req.params


    if(!planetId) {
      return res.send('Planet does not exist!')
    }

    const planet = await Planet.findByPk(planetId, {
      include: Satelite
    })


    return res.json({ planet })
  }
}