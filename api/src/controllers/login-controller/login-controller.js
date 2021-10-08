const { users } = require("../../db.js");
const bcryp = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfing = require("../../config/auth");
//Logeo
const singIn = async (req, res) => {
  let { mail, password } = req.body;
  await users
    .findOne({
      where: {
        mail: mail,
      },
    })
    .then((user) => {
      if (!user) {
        res.json({
          msg: "Este usuario no coincide con un existente, intente de nuevo ",
        });
      } else {
        if (bcryp.compare(password, user.password)) {
          // devuelve el token
          let token = jwt.sign({ user: user }, authConfing.secret, {
            expiresIn: "2 days",
          });
          res.status(200).json({ auth: true, user: user, token: token });
        } else {
          res.json({
            auth: false,
            msg: "La contraseña no corresponde a un mail existente",
          });
        }
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

//Registro
const singUp = async (req, res) => {
  let { name, surname, mail } = req.body;
  const userValidate = await users.findOne({
    where: {
      mail: mail,
    },
  });
  console.log("este es el user", userValidate);
  if (userValidate) {
    return res.json({
      msg: "Este usuario ya existe",
    });
  }
  if (req.body.password.length > 6) {
    let passwordCrypt = bcryp.hashSync(
      toString(req.body.password),
      +authConfing.rounds
    );
    await users
      .create({
        name,
        surname,
        mail,
        password: passwordCrypt,
      })
      .then((user) => {
        let token = jwt.sign({ user: user }, authConfing.secret, {
          expiresIn: "2 days",
        });
        res.status(200).json({ user: user, token: token });
      });
  } else {
    return "La contraseña debe tener al menos 6 caracteres";
  }
};

module.exports = {
  singUp,
  singIn,
};
