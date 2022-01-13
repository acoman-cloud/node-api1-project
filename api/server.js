// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model.js')

const server = express()

server.get('/api/users', (req, res) =>{
	res.json('users');
})


server.post('/api/users', async (req, res) => {
  try {
    const { name, bio } = req.body
    console.log(name, bio)
    const newUser = await User.create({ name, bio })
    console.log(newUser)
    res.status(201).json(newUser) // :(
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

server.use('*', (req, res) =>{
	res.status(404).json({ message: "not found" })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
