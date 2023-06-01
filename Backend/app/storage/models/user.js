module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define("client", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      noofuser: {
        type: Sequelize.INTEGER
      },
      budget: {
        type: Sequelize.DECIMAL
      },
      createdat: {
        type: Sequelize.DATE
      },
      updatedat: {
        type: Sequelize.DATE
      }
    }, {
      createdAt: 'createdat',
      updatedAt: 'updatedat'
    });
  
    return client;
  };