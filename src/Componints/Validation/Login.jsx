import React from "react";
import { useFormik } from "formik";
import { signUpSchema2 } from "../../Schemas/Schema2";
import { Link } from "react-router-dom";
import "./validation.scss";
const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema2,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="container">
      <form className="form2" onSubmit={handleSubmit}>
        <div>
          <h2>Welcome!</h2>
        </div>

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

        <button>Sign Up</button>
        <p className="signup">
          Dont have an account ? <Link to="/register">Sign Up now</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
