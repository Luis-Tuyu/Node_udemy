'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts",[{
      firstnane: "Luis", //esta columna está mal escrita F
      lastname: "Tuyu",
      phone: "9995520890",
      email: "Luis@gmail.com",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      firstnane: "Francisco", //eta mal escrita la comlumna jeje
      lastname: "adrón",
      phone: "9995520899",
      email: "Francisco@gmail.com",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
