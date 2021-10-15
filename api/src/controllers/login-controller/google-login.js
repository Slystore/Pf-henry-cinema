const { OAuth2Client } = require("google-auth-library");
const keys = require("./secretVercel.json");
const { users } = require("../../db");
const jwt = require("jsonwebtoken");
const authConfing = require("../../config/auth");

async function googleLogin(req, res) {
    const client = new OAuth2Client("241468930497-5c8oip7045oflla8q4g9ovujnb104gge.apps.googleusercontent.com");
    const { $b, userType } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: $b.id_token,
        audience: "241468930497-5c8oip7045oflla8q4g9ovujnb104gge.apps.googleusercontent.com",
    });

    const userValidate = await users.findOne({
        where: {
            mail: ticket.payload.email,
        },
    });
    if (userValidate) {
        let token = jwt.sign({ user: userValidate }, authConfing.secret, {
            expiresIn: "2 days",
        });
        res.status(200).json({ auth: true, user: userValidate, token: token });
    } else {
        console.log("este es el ticket con la data ", ticket);
        const userGoogle = await users.create({
            name: ticket.payload.given_name,
            surname: ticket.payload.family_name,
            mail: ticket.payload.email,
            password: ticket.payload.jti,
            userType,
        });
        if (userGoogle) {
            let token = jwt.sign({ user: userGoogle }, authConfing.secret, {
                expiresIn: "2 days",
            });
            res.status(200).json({
                msg: "Usuario creado con exito!",
                user: userGoogle,
                token: token,
            });
        }
    }
}

module.exports = googleLogin;