import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { createUser } from "../../../redux/users/usersAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { VscTriangleLeft } from 'react-icons/vsc'
import "./formsingUp.css";
import { useHistory } from "react-router";


export function FormSingUp() {
  const [succes, setSucces] = useState(false);
  const [userCreated, setUserCreated] = useState({
    noValidate: "",
    validate: "",
  });
  
  const userError = useSelector((state) => state.usersReducer.userError);
  console.log("este es el error", userError);
  const history = useHistory();

  return (
  <div className="ContainerLogIn">
    <div className="ContainerSingUp">
      <Typography variant="h4" sx={{ width:162, height:60, margin: '0 auto', fontWeight: 'bold' }}>CinemAPP</Typography>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          mail: "",
          password: "",
          // confirmPassword: "",
        }}
        validate={(valores) => {
          let error = {};
          //Nombre
          if (!valores.name) {
            error.name = "Por favor completar este campo";
          } else if (
            !/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(valores.name)
          ) {
            error.name =
            "Debe comenzar con mayúscula, sin numeros ni espacios";
          }
          //Apellido
          if (!valores.surname) {
            error.surname = "Por favor completar este campo";
          } else if (!/^[a-zA-Z]{3,30}/.test(valores.surname)) {
            error.surname = "Apellido debe tener entre 3 y 30 carecteres";
          }
          //Email
          if (!valores.mail) {
            error.mail = "Por favor completar este campo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.mail
            )
            
          ) {
            error.mail = "Por favor ingresar un correo electronico valido";
          }
          //Contraseña
          if (!valores.password) {
            error.password = "Por favor ingrese una contraseña";
          } else if (
            !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(valores.password)
          ) {
            error.password =
              "La contraseña debe tener mínimo seis caracteres, al menos una letra y un número";
          }
          // if (!valores.confirmPassword) {
          //   error.confirmPassword = "Por favor repita la contraseña";
          // } else if (valores.password !== valores.confirmPassword) {
          //   error.confirmPassword = "Las contraseñas no coinciden ";
          // }

          return error;
        }}
        onSubmit={(body, { resetForm }) => {
          async function validateUser() {
            try {
              const x = await createUser(body);
              console.log("este es mi x", x);
              if (x.msg) {
                setUserCreated({
                  noValidate: x.msg,
                });
                setTimeout(() => {
                  setUserCreated({
                    noValidate: "",
                  });
                }, 3000);
              }
              if (x.data.user) {
                setSucces(true);
                setTimeout(() => {
                  setSucces(false);
                  history.push("/login");
                }, 3500);
                resetForm();
              }
            } catch (err) {}
          }
          validateUser();
        }}
      >
        {({ errors }) => (
          <div className="formSingUp-container">
            
            <Box className="Logo">
              <Typography variant="h5" sx={{ width:'150px', height:'15px', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'bold' }}>Sign Up</Typography>
            </Box>
            
            <Form >

                <div className="DataField">
                  <Field
                    className="Field"
                    autoComplete="off"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => <div className="ErrorContainer">
                      <VscTriangleLeft className="ArrowLeft1" />
                      <div className="error">{errors.name}</div>
                      </div>}
                  />
                </div>

                <div className="DataField">
                  <Field
                    className="Field"
                    autoComplete="off"
                    type="text"
                    name="surname"
                    placeholder="Surname"
                  />
                  <ErrorMessage
                    name="surname"
                    component={() => <div className="ErrorContainer">
                      <VscTriangleLeft className="ArrowLeft1" />
                      <div className="error">{errors.surname}</div>
                      </div>}
                  />
                </div>

                <div className="DataField">
                  <Field
                    className="Field"
                    autoComplete="off"
                    type="text"
                    name="mail"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="mail"
                    component={() => <div className="ErrorContainer">
                      <VscTriangleLeft className="ArrowLeft1" />
                      <div className="error">{errors.mail}</div>
                      </div>}
                  />
                </div>

                <div className="DataField">
                  <Field
                    className="Field"
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => <div className="ErrorContainer">
                      <VscTriangleLeft className="ArrowLeft1" />
                      <div className={ errors.password === "Por favor ingrese una contraseña"? "error" : "error2"}>{errors.password}</div>
                      </div>}
                  />
                </div>
                
                <div className="DataField">
                  <button className="BtnSignIn" type="submit">Create User</button>
                </div>

                <div className="DataField">
                  {userCreated && <p>{userCreated.noValidate}</p>}
                  {succes && <p>Usuario creado</p>}
                </div>
            </Form>
 
          </div>
        )}
      </Formik>
    </div>
  </div>
  );
}
