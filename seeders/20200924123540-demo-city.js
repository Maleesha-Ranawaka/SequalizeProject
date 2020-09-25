'use strict';
var Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('citylists', [{
     city: 'town2',
     district: 'Colombo',
     approved: 'No',
     approvedby: '',
     createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
   },
   {
    city: 'town3',
    district: 'Colombo',
    approved: 'No',
    approvedby: '',
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  {
    city: 'town4',
    district: 'Colombo',
    approved: 'No',
    approvedby: '',
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
  }
  ]);

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('citylists', null, {}); 
    
  }
};
