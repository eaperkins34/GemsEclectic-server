const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(
        function() {
            console.log('connected to gems eclectic');
        },
        function(err) {
            console.log('you broke')
        }
    )

module.exports = sequelize