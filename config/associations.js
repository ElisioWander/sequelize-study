const Planet = require('../models/Planet')
const Satelite = require('../models/Satelite')
const Cap = require('../models/Cap')
const Spaceship = require('../models/Spaceship')

Planet.hasOne(Satelite, { 
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE' 
})

Satelite.belongsTo(Planet, {
  foreingKey: 'planetId',
  as: 'planet' 
})

Cap.belongsToMany(Spaceship, {
  foreingKey: 'capId',
  through: 'capspaceship',
  as: 'spaceships' 
})

Spaceship.belongsToMany(Cap, {
  foreingKey: 'spaceshipId',
  through: 'capspaceship',
  as: 'caps'
})

module.exports = {
  Planet,
  Satelite
}