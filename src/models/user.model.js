export default (sequelize, Sequelize) => {

    const Users = sequelize.define("users", {
        name: {
            type: Sequelize.TEXT
        },
        login: {
            type: Sequelize.TEXT
        },
        password: {
            type: Sequelize.TEXT
        },
    });

    return Users;
};