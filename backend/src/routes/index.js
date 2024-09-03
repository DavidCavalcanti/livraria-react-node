import express from "express";
import livroRoutes from "./livroRoutes.js";

const routes = (app) => {
    app.route("/")
        .get((req, res) => {
            res.status(200).send("API Habilitada!");
        });

    app.use(express.json(), livroRoutes);
}

export default routes;