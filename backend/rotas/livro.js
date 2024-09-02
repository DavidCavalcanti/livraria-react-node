const { Router } = require("express");
const router = Router()

router.get("/", "você fez um GET livros")
router.post("/", (req, res) => {
    res.send("você fez um POST livros")
})
router.patch("/", (req, res) => {
    res.send("você fez um POST livros")
})
router.delete("/", (req, res) => {
    res.send("você fez um POST livros")
})
module.exports = router