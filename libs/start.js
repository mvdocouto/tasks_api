module.exports = app => {
    // Sync database an table before load server.
    app.db.sync().done( () => {
        // running server
        app.listen(app.get("port"), () =>{
            console.log(`Estamos vivos! http://localhost:${app.get("port")}`);
        });    
    });
}