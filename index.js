const express = require("express")
const app = express()
require("express-readme")(app)
app.use(express.json())
app.get("/", (req, res) => {
  res.send()
})
app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "medium",
  })
})
app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params
  const { logo } = req.body
  !logo
    ? res.status(418).send({ message: "We need a logo!" })
    : res.send({ tshirt: `👕 with your logo ${logo} and id of ${id}` })
})

app.listen(process.env.PORT || 3000)
