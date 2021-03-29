const PORT = process.env.PORT || 3000
const development = {
    username: "postgres",
    password: "postgres",
    database: "store-dev",
    host: "127.0.0.1",
    dialect: "postgres"

}

const test = {
    username: "postgres",
    password: "postgres",
    database: "store-dev",
    host: "127.0.0.1",
    dialect: "postgres"
};

const production = {

    username: "postgres",
    password: "postgres",
    database: "store-dev",
    host: "127.0.0.1",
    dialect: "postgres"
}

module.exports={
    PORT, development, test, production,
}