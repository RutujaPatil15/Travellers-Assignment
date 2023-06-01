const db = require("../storage/models");
const Users = db.users;
const Op = db.Sequelize.Op;

/* Create and Save a new user
curl --location 'localhost:3000/api/users/createuser' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "rutuja",
    "email": "r@gmail.com",
    "country": "India",
    "noofuser": 4
}' */
exports.createuserdata = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const user = {
    name: req.body.name,
    email: req.body.email,
    country: req.body.country,
    noofuser: req.body.noofuser,
    budget: req.body.budget,
    createdat: new Date()  
  };

  // Save user in the database
  Users.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    });
};

/* Retrieve all Tutorials from the database.
curl --location 'localhost:3000/api/users/getdata' \
--header 'Content-Type: application/json' */

exports.getallusersdata = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Users.findAll({ where: condition }).then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};