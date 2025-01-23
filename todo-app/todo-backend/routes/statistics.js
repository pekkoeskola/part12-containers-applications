const express = require("express")
const { getAsync } = require("../redis")

const router = express.Router()

router.get("/", async (req, res) => {
  const added_Todos = await getAsync("added_todos")

  res.json({
    added_todos: Number(added_Todos) || 0
  })
})

module.exports = router