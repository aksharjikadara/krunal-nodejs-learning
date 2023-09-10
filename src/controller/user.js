const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/users.json')

const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const users = data.users

const createUser = (req, res) => {
  // console.log(req);
  const user = req.body;
  users.push(user);
  const writeData = {
    "users" : users
  }
  const writeFile =fs.writeFileSync(dataPath, JSON.stringify(writeData))
  res.status(200).send(user)
}

const getAllUsers = (req, res) => {
  res.status(200).send(users)
}

module.exports = {
  createUser,
  getAllUsers
};