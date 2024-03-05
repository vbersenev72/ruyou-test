export default (sequelize, Sequelize) => {

    const Color = sequelize.define("color", {
        name: {
            type: Sequelize.TEXT
        },
        id_palette: {
            type: Sequelize.INTEGER
        },
        hex: {
            type: Sequelize.TEXT
        }
    });

    return Color;
};