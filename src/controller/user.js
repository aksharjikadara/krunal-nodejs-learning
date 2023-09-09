const user = (req, res) => {
  res.status(200).json({
    message: "Hello from controller!"
  })
}

module.exports = user;