require('dotenv').config()
const app = require('./app')


// const PORT = process.env.PORT || 3001
// app.listen(PORT)
// console.log(`server is running on port ${PORT}`)
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on port 3001`)
  })