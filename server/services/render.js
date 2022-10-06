const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config({ path: 'C:\Users\HP\OneDrive\Desktop\User management\env\config.env' });
const PORT = process.env.PORT || 8080;

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get(`http://localhost:${PORT}/api/users`)
    .then(function (response) {
      res.render('index', { users: response.data ,port: PORT});
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render('add_user');
};

exports.update_user = (req, res) => {
  axios
    .get(`http://localhost:${PORT}/api/users`, { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render('update_user', { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
