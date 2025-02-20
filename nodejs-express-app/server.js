import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something broke!")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

