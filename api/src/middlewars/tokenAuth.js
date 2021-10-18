const jwt = require("jsonwebtoken");
const { users } = require("../db");
const authConfing = require("../config/auth");
const tokenVerify = (req, res, next) => {
  const bearHeader = req.headers.Authorization;
  console.log('antes del if-else!', bearHeader)
  if (!bearHeader) {
    console.log('adentro del if!')
    res.status(403).json({ msg: "Acceso no autorizado" });
  } else {
    console.log('adentro del else!')
    const token = bearHeader.split(" ")[1];
    console.log(token)
    jwt.verify(token, authConfing.secret, function (err, decoded) {
      if (err) {
        res
          .status(401)
          .json({ msg: "No tiene autorizacion para ver este contenido" });
      }
    });
    next();
  }
};

module.exports = tokenVerify;
