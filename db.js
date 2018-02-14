import Sequelize from "Sequelize";
const config = require("libs/cconfig.js");
let sequelize = null;

module.exports = () => {
    if(!sequelize){
        sequelize = new Sequelize (
            config.database,
            config.username,
            config.password,
            config.params
        );
    }
    return sequelize;
}