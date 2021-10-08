import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState} from "react";
import { createUser } from "../../actions";
import { Formik, Form, Field, ErrorMessage } from "formik";


function FormSingUp() {
  const dispatch = useDispatch();
  const [succes, setSucces] = useState(false);

  
  const users = useSelector((state) => state.users);
  console.log('estos son mis users',users)

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
          resetForm();
          dispatch(createUser(body));
          setSucces(true);
          setTimeout(() => setSucces(false), 3000);
        }}
      >
        {({ errors }) => (
          <Form>
            <label>Name </label>
            <Field autoComplete="off" type="text" name="name" />
            <ErrorMessage
              name="name"
              component={() => <div>{errors.name}</div>}
            />

            <label>Surname </label>
            <Field autoComplete="off" type="text" name="surname" />
            <ErrorMessage
              name="surname"
              component={() => <div>{errors.surname}</div>}
            />

            <label>Email </label>
            <Field autoComplete="off" type="text" name="mail" />
            <ErrorMessage
              name="mail"
              component={() => <div>{errors.mail}</div>}
            />

            <label>Password</label>
            <Field autoComplete="off" type="password" name="password" />
            <ErrorMessage
              name="password"
              component={() => <div>{errors.password}</div>}
            />

            {/* <label>Confirm password</label>
            <Field autoComplete="off" type="password" name="confirmPassword" />
            <ErrorMessage
              name="confirmPassword"
              component={() => <div>{errors.confirmPassword}</div>}
            /> */}

            <button type="submit">Create User</button>
            {succes && <p>Usuario creado</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormSingUp;
