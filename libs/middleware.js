module.exports = app => {
    const httpPort = 3000;
    app.set("port", httpPort);
    app.set("json spaces", 4);
}