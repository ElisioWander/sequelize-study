const Spaceship = require('../models/Spaceship')
const Cap = require('../models/Cap')

module.exports = {
  async store(req, res) {
    const { capId } = req.params
    const { name, capacity } = req.body

    const cap = await Cap.findByPk(capId)

    if(!cap) {
      return res.send('Captain does not exist!')
    }

    const [spaceship] = await Spaceship.findOrCreate({
      where: { name, capacity }
    })

    await cap.addSpaceship(spaceship)
  },

  async index(req, res) {
    const { capId } = req.params

    const cap = await Cap.findByPk(capId, {
      include: { association: 'spaceships' }
    })

    return res.json({ cap })
  }
}