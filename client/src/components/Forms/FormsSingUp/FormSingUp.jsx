import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { createUser } from "../../../redux/users/usersAction";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./formsingUp.css";
import { useHistory } from "react-router";

export function FormSingUp() {
  const [, setSucces] = useState(false);
  const [userCreated, setUserCreated] = useState({
    noValidate: "",
    validate: "",
  });

  const userError = useSelector((state) => state.usersReducer.userError);
  console.log("este es el error", userError);
  const history = useHistory();

  return (
    <div>
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
              "El nombre debe comenzar con mayuscula, no se permiten numeros ni espacios";
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
            <Form className="form-cont">
              <div className="celda-1">
                <div className="label-form">
                  <label>Name </label>
                </div>
                <Field
                  className="inputs"
                  autoComplete="off"
                  type="text"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component={() => <div>{errors.name}</div>}
                />
              </div>
              <div className="celda-1">
                <div className="label-form">
                  <label>Surname </label>
                </div>
                <Field
                  className="inputs"
                  autoComplete="off"
                  type="text"
                  name="surname"
                />
                <ErrorMessage
                  name="surname"
                  component={() => <div>{errors.surname}</div>}
                />
              </div>
              <div className="celda-1">
                <div className="label-form">
                  <label>Email </label>
                </div>
                <Field
                  className="inputs"
                  autoComplete="off"
                  type="text"
                  name="mail"
                />
                <ErrorMessage
                  name="mail"
                  component={() => <div>{errors.mail}</div>}
                />
              </div>
              <div className="celda-1">
                <div className="label-form">
                  <label>Password</label>
                </div>
                <Field
                  className="inputs"
                  autoComplete="off"
                  type="password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component={() => <div>{errors.password}</div>}
                />
              </div>
              <div className="celda-1">
                <button type="submit">Create User</button>
              </div>
              <div>
                ,{userCreated && <p>{userCreated.noValidate}</p>}
                {/* {succes && (
                    <Snackbar
                      open={open}
                      autoHideDuration={3000}
                      onClose={onClose}
                    >
                      <Alert onClose={handleClose} severity="success">
                        <AlertTitle>Exitoso!</AlertTitle>
                        Usuario creado
                      </Alert>
                    </Snackbar>
                  )} */}
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
