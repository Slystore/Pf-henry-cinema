import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/users/usersAction";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import { VscTriangleLeft } from 'react-icons/vsc'
import './Form.css'

function FormSingIn() {
  const usuario = useSelector((state) => state.users);
  const history = useHistory();
  const [userLog, setUserLog] = useState({
    msgErr: "",
    userData: undefined,
  });

  console.log("my users ", usuario);

  return (
    <div className="ContainerLogIn">
      <div className="FormContainer">
          <Typography variant="h4" sx={{ width:162, height:60, margin: '0 auto', fontWeight: 'bold' }}>CinemAPP</Typography>
          <div className="CardForm" >
            <Box className="Logo">
              <Typography variant="h5" sx={{ width:'150px', height:'15px', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'bold' }}>Log In</Typography>
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
                      console.log('esto me llega al body',body)
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
                    {/* <label>Email</label> */}
                    <Box className="DataField">
                        <Field  className="Field" name="mail" type="text" placeholder="Email" /> 
                        <ErrorMessage
                          name="mail"
                          component={() =><div className="ErrorContainer">
                            <VscTriangleLeft className="ArrowLeft1" />
                            <div className="error">{errors.mail}</div>
                          </div> }
                        />
                    </Box>

                    <Box className="DataField">
                        <Field className="Field" name="password" type="password" placeholder="Contraseña" maxLength="15"/>
                    </Box>

                    <Box className="DataField">
                        <button className="BtnLogin" type="submit">Login</button>
                    </Box>


                    {console.log("este es log ", userLog)}

                    {/* <label>Contraseña</label> */}
                    {userLog.msgErr && <div className="ErrorContainer2">
                                          <VscTriangleLeft className="ArrowLeft2" />  
                                          <div className="error2">{userLog.msgErr}</div>
                                       </div>} 
                  </Form>
                )}
              </Formik>

              <div className="DividerContainer"><Divider orientation="horizontal" className="Divider">Logea con</Divider></div>

              <div className="BtnLoginFacebook">
                <Button startIcon={<FacebookIcon sx={{color: 'white'}}/>} className="BtnFace" sx={{ color: 'white' }}>Facebook</Button>
              </div>

              <div className="NewUser">
                <div className="RowEnd">¿Todavia no tienes un usuario?</div>
                <div  className="RowEnd"><Link className="LinkSingIn" to = "/login/singUp"> Create uno! </Link></div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default FormSingIn;
