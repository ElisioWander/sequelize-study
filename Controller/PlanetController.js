const Planet  = require('../models/Planet')

module.exports = {
  async store(req, res) {
    const { name, position } = req.body

    const planet = Planet.create({ name, position })

    return res.json({planet})
  },

  async index(req, res) {
    const Planets = await Planet.findAll()

    res.json({ Planets })
  },

  async put(req, res) {
    const { name, position } = req.body

    await Planet.update({
      name,
      position
    }, {
      where: {
        id: req.params.id,
      },
    })

    return res.send('Planet was updated successfully')
  },

  async delete(req, res) {
    await Planet.destroy({
      where: {
        id: req.params.id
      }
    })

    return res.send('Planet was deleted successfully')
  }
}