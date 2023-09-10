const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/users.json')

const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const users = data.users

const createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  const writeData = {
    "users": users
  }
  const writeFile = fs.writeFileSync(dataPath, JSON.stringify(writeData))
  res.status(200).send(user)
}

const getAllUsers = (req, res) => {
  res.status(200).send(users)
}

const getById = (req, res) => {
  const id = req.params.id
  const data = users.find((user) => {
    return user.id === id
  })
  if (!data) {
    res.status(404).json({ message: 'User Not Found' })
  }
  res.status(200).send(data)
}

module.exports = {
  createUser,
  getAllUsers,
  getById
};