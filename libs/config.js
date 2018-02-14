// Config Squelize en Sqlite
module.exports = {
    database: "tasks",
    username: "",
    passwords: "",
    params: {
        dialect: "sqlite",
        storage: "tasks.sqlite",
        define: {
            underscore: true
        }
    }

}