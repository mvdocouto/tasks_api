import express  from "express";
const httpPort = 3000;
const app = express();

app.get("/", (req, res) => res.json({server: "running"}));
app.listen(httpPort, () => {
    console.log(`Estamos vivos! http://localhost:${httpPort}`);
});