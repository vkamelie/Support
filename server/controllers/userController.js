const bcrypt = require("bcrypt");

module.exports = {
  // create: (req, res) => {
  //     const db = req.app.get('db');
  //     const {username, password, name} = req.body;
  //     db.create_user([username, password, name]).then(response => {
  //         res.status(200).json(response)
  //     })
  // },

  signup: (req, res) => {
    const { username, password, name } = req.body;
    const db = req.app.get("db");
    console.log("sign up is working");
    db.check_user_exists(username).then(user => {
      if (user.length) {
        res
          .status(200)
          .send("Username already exists, please use a different username");
      } else {
        const saltRounds = 12;
        bcrypt.genSalt(saltRounds).then(salt => {
          bcrypt.hash(password, salt).then(hashedPassword => {
            db.create_user([username, hashedPassword, name]).then(
              loggedInUser => {
                req.session.user = {
                  id: loggedInUser[0].id,
                  username: loggedInUser[0].username,
                  name: loggedInUser[0].name
                };
                res.status(200).send(req.session.user);
              }
            );
          });
        });
      }
    });
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    let userFound = await db.check_user_exists(username);
    // .catch((err) => console.log('error caught'));
    // if(!userFound[0]){
    //     res.status(200).send("Incorrect username, please try again.")
    // }

    let result = await bcrypt.compare(password, userFound[0].password);
    if (result) {
      console.log("sign in working");
      // console.log(userFound[0]);
      req.session.user = {
        id: userFound[0].user_id,
        username: userFound[0].username,
        name: userFound[0].name
      };
      res.status(200).send(req.session.user);
    } else {
      res.status(200).send("incorrect username/password");
    }
  }
};
