// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Wishlist = sequelize.define("Wishlist", {
        // The email cannot be null, and must be a proper email before creation
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edition: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    Wishlist.associate = function(models) {
        models.Wishlist.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

    };
    return Wishlist;
};