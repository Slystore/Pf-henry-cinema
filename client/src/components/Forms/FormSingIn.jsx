import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useState } from "react";
import { googleLog, login } from "../../redux/users/usersAction";
import { GoogleLogin } from "react-google-login";
import { VscTriangleLeft } from 'react-icons/vsc';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Form.css'

function FormSingIn() {
 
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
      <div className="ContainerLogIn">
        <div className="FormContainer">
          <Typography variant="h4" sx={{ width:162, height:60, margin: '0 auto', fontWeight: 'bold' }}>CinemAPP</Typography>
          <div className="CardForm">
          <Box className="Logo">
              <Typography variant="h5" sx={{ width:'150px', height:'15px', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'bold' }}>Sign In</Typography>
          </Box>
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

                  <div className="DataField">
                    <Field className="Field" name="mail" type="text" placeholder="Email"/>
                    <ErrorMessage
                      name="mail"
                      component={() => <div className="ErrorContainer">
                                          <VscTriangleLeft className="ArrowLeft1" />
                                         <div className="error">{errors.mail}</div>
                                      </div>}
                    />

                  </div>

                  <div className="DataField">
                    <Field  className="Field" name="password" type="password" placeholder="Password" />
                  </div>

                  <div className="DataField">
                    <button className="BtnLogin" type="submit">Login</button>
                  </div>

                  <div className="DividerContainer">
                    <Divider orientation="horizontal" flexItem>o logea con </Divider>
                  </div>

                  <div className="BtnLoginFacebook">
                    <GoogleLogin 
                      className="BtnFace"
                      clientId="241468930497-uhl9h4jpajj8jk2o4k49e3ef0tfuq5pa.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                   
                  <div className="DataField">
                    {console.log("este es log ", userLog)}
                    {userLog.msgErr && <div className="ErrorContainer">{userLog.msgErr}</div>}
                  </div>
                  </div>

                </Form>
              )}
            </Formik>

            <div className="DataField">
              <div className="NewUser">¿Todavia no tienes un usuario?</div>
              <div className="RowEnd"><Link className="LinkSingIn" to="/login/singUp">Create uno!</Link></div>
            </div>

          </div>
      </div>
    </div>
  );
}

export default FormSingIn;

