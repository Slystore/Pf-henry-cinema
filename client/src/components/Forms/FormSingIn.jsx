import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { googleLog, login } from "../../redux/users/usersAction";
import { GoogleLogin, GoogleLogout } from "react-google-login";
function FormSingIn() {
  const usuario = useSelector((state) => state.users);
  const history = useHistory();
  const [userLog, setUserLog] = useState({
    msgErr: "",
    userData: undefined,
  });
  const responseGoogle = async (response) => {
    if (response) {
      const x = await googleLog(response);
      console.log('esta es la respuesta de mi post',x)
      if(x.user){
        localStorage.setItem('token',response.tokenId)
        history.push('/')
      }
      // if (x.data.user) {
      //   localStorage.setItem("token", response.tokenId);
      //   history.push("/");
      // }
    }
    console.log("esta es la respuesta", response);
  };
  

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            mail: "",
            password: "",
          }}
          validate={(valores) => {
            let errors = {};
            if (!valores.mail) {
              errors.mail = "Por favor ingresar un mail";
            }
            return errors;
          }}
          onSubmit={(body) => {
            async function sendLogin() {
              try {
                console.log("esto me llega al body", body);
                const x = await login(body);
                console.log("respuesta del log", x);
                if (!x.data) {
                  setUserLog({
                    msgErr: x,
                  });
                } else {
                  setUserLog({
                    userData: x,
                  });
                  history.push("/");
                }
              } catch (err) {
                console.log(err);
              }
            }
            sendLogin();
          }}
        >
          {({ errors }) => (
            <Form name="form">
              <label>Email</label>
              <Field name="mail" type="text" />
              <ErrorMessage
                name="mail"
                component={() => <div>{errors.mail}</div>}
              />
              <label>Contraseña</label>
              <Field name="password" type="password" />
              <button type="submit">Login</button>
              {console.log("este es log ", userLog)}
              {userLog.msgErr && <div>{userLog.msgErr}</div>}
              <GoogleLogin
                clientId="241468930497-uhl9h4jpajj8jk2o4k49e3ef0tfuq5pa.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </Form>
          )}
        </Formik>
        <p>
          ¿Todavia no tienes un usuario?
          <Link to="/login/singUp">Create uno!</Link>
        </p>
      </div>
    </div>
  );
}

export default FormSingIn;
