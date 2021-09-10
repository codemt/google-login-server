module.exports = (sequelize, Sequelize) => {


    const User = sequelize.define("users", {

        Name: {

            type: Sequelize.STRING

        },
        Email: {

            type: Sequelize.STRING

        },
        ProviderName: {

            type: Sequelize.STRING

        },
        Image: {
            type: Sequelize.STRING
        },
        Token: {

            type: Sequelize.STRING

        }



    })
    return User;

}