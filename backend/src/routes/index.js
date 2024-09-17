import express from "express";
import livroRoutes from "./livroRoutes.js";
import favoritoRoutes from "./favoritoRoutes.js";

const routes = (app) => {
    app.route("/")
        .get((req, res) => {
            res.status(200).send("API Habilitada!");
        });

    app.use(express.json(), livroRoutes, favoritoRoutes);
}

export default routes;