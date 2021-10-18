const { users } = require("../../db.js");
const bcryp = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfing = require("../../config/auth");
//Logeo
const singIn = async (req, res) => {
  let { mail, password } = req.body;

  try {
    const userData = await users.findOne({
      where: {
        mail: mail,
      },
    });
    if (!userData) {
      res.json({
        msg: "Este usuario no coincide con uno existente, intete de nuevo",
      });
    } else {
      console.log("este es el body del front ", password);
      console.log("la encryptada",  userData.password);
      const match = await bcryp.compare(password, userData.password);
      console.log("este es match", match);
      if (match) {
        let token = jwt.sign({ user: userData }, authConfing.secret, {
          expiresIn: "2 days",
        });
        res.status(200).json({ auth: true, user: userData, token: token });
      } else {
        res.json({
          auth: false,
          msg: "La contraseña no corresponde a un mail existente",
        });
      }
    }
  } catch (err) {
    res.status(500).json({ msg: "yo rompo", error: err });
  }

};

//Registro
const singUp = async (req, res) => {
  let { name, surname, mail } = req.body;
  const userValidate = await users.findOne({
    where: {
      mail: mail,
    },
  });
  if (userValidate) {
    return res.json({
      msg: "Este usuario ya existe",
    });
  }
  console.log('esta es la pass del registro',req.body.password)
  if (req.body.password.length > 6) {
    let passwordCrypt = await bcryp.hash(
      req.body.password,
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
        res
          .status(200)
          .json({ msg: "Usuario creado con exito!", user: user, token: token });
      });
  } else {
    return "La contraseña debe tener al menos 6 caracteres";
  }
};

module.exports = {
  singUp,
  singIn,
};
