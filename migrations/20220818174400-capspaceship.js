'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('capspaceship', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      capId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'caps', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      spaceshipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'spaceships', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('capspaceship')
  }
};
