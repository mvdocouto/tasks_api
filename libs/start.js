module.exports = app => {
    app.listen(app.get("port"), () =>{
        console.log(`Estamos vivos! http://localhost:${app.get("port")}`);
    });
}