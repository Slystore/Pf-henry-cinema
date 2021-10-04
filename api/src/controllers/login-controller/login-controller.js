const { users } = require("../../db.js");
const bcryp = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfing = require("../../config/auth");
const { response } = require("express");
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
        res
          .status(404)
          .json({
            msg: "Este usuario no coincide con un existente, intente de nuevo ",
          });
      } else {
      if(bcryp.compare(password, user.password)){
          // devuelve el token
          let token = jwt.sign({ user: user }, authConfing.secret, {});
          res.status(200).json({ user: user, token: token });
        } else {
          res.status(404).json({ msg: "contraseña incorrecta" });
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
  const userValidate = users.findOne({
    where:{
      mail:mail
    }
  })
  if(userValidate){
    return res.json({
      msg:"Este usuario ya existe"
    })
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
        let token = jwt.sign({ user: user }, authConfing.secret, {});
        res.status(200).json({ user: user, token: token });
      });
  }else{
      return "La contraseña debe tener al menos 6 caracteres"
  }
};

module.exports = {
  singUp,
  singIn,
};
