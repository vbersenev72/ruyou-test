export default (sequelize, Sequelize) => {

    const Palette = sequelize.define("palette", {
        name: {
            type: Sequelize.TEXT
        },
        user_id: {
            type: Sequelize.INTEGER
        },
    });

    return Palette;
};