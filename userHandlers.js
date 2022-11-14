const users = [
    {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      city: "Paris",
      langage: "English",
    },
    {
        id: 1,
        firstname: "Valeriy",
        lastname: "Appius",
        email: "valeriy.appius@example.com",
        city: "Moscow",
        langage: "Russian",
      },
      {
        id: 1,
        firstname: "Ralf",
        lastname: "Geronimo",
        email: "ralf.geronimo@example.com",
        city: "New York",
        langage: "Italian",
      },
  ];

const database = require("./database");

const getUsers = (req, res) => {
    database
      .query("select * from users")
      .then(([users]) => {
        res.json(users);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
      });
  };
  
  const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
  
    database
      .query("select * from users where id = ?", [id])
      .then(([users]) => {
        if (users[0] != null) {
          res.status(200).json(users[0]);
        } else {
          res.status(404).send("Not Found");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
      });
  };
  
  
  module.exports = {
    getUsers,
    getUserById,
  };
  
