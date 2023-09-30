import React, { Component } from "react";
import "./validation.scss";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/Schema";
import { Link } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="container">
      <form className="form1" onSubmit={handleSubmit}>
        <div>
          <h2>Welcome!</h2>
        </div>
        <input
          type="text"
          id="username"
          placeholder=" User name"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && touched.username ? (
          <p className="form-errer">{errors.username}</p>
        ) : null}

        <input
          type="email"
          id="email"
          placeholder=" Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="form-errer">{errors.email}</p>
        ) : null}

        <input
          type="password"
          id="password"
          placeholder=" Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="form-errer">{errors.password}</p>
        ) : null}

        <input
          type="password"
          id="confirmPassword"
          placeholder="Password Confirm"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword ? (
          <p className="form-errer">{errors.confirmPassword}</p>
        ) : null}

        <button>Sign Up</button>
        <p className="signup">
          Already have an account ? <Link to="/login">Log in now</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
