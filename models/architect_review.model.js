const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    
    const ArchitectReview = sequelize.define("architect_review", {
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    })

    return ArchitectReview
}