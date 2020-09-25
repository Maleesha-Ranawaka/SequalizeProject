'use strict';
var Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('citylists', [{
     city: 'town1',
     district: 'Colombo',
     approved: 'No',
     approvedby: 'Priboy',
     createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
   }]);

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('citylists', null, {}); 
    
  }
};
