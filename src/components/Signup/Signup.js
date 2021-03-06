import React from "react";
import * as Yup from "yup";
import {Formik, Field, Form} from "formik";
import Axios from "../../api/axios";

import "./Signup.css";

const validationSchema = Yup
  .object()
  .shape({
    username: Yup
      .string()
      .required("plese fill out you username")
      .min(4, "username can not be less than 4  letters"),
    email: Yup
      .string()
      .email("please fill out your email")
      .required("email can be empty"),
    password: Yup
      .string()
      .min(6, "password can not be less than 6")
      .required("please enter your password")
  });

const Signup = () => {
  const style = {
    display: "block"
  };

  const signup = async values => {
    const user = {
      username: values.username,
      email: values.email,
      password: values.password
    }
    await Axios.post("/auth/new", user);
  };

  return (
    <div>
      <h1 className="form__title">Sign Up</h1>
      <Formik
        initialValues={{
        username: "",
        email: "",
        password: ""
      }}
        validationSchema={validationSchema}
        onSubmit={signup}>
        {({errors, touched}) => (
          <Form className="form">
            <Field
              autoComplete={"off"}
              className="form__input"
              style={{
              style
            }}
              name="username"
              placeholder="enter you name"
              type="text"/>
            <span
              className={errors.username
              ? "error"
              : "no-error"}>
              {errors.username && touched.username
                ? errors.username
                : null}
            </span>
            <Field
              autoComplete={"off"}
              className="form__input"
              style={{
              style
            }}
              name="email"
              placeholder="enter you email"
              type="email"/>
            <span
              className={errors.email
              ? "error"
              : "no-error"}>
              {errors.email && touched.email
                ? errors.email
                : null}
            </span>
            <Field
              autoComplete={"off"}
              className="form__input"
              style={{
              style
            }}
              name="password"
              placeholder="enter you password"
              type="password"/>
            <span
              className={errors.password
              ? "error"
              : "no-error"}>
              {errors.password && touched.password
                ? errors.password
                : null}
            </span>
            <button className="btn" type="submit">
              Signup
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
