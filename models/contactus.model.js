const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    
    const ContactUs = sequelize.define("contact_us", {
        name: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })

    return ContactUs
}