import React, { useEffect } from "react";
import { CustomInput } from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userSchema = Yup.object().shape({
    email: Yup.string().email("Email Should  be vailid")
      .required("Email is Required"),
    password: Yup.string().required("Pasword is Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: values => {
      dispatch(login(values))
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { user, isLoding, isError, isSuccess, Maseage } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (!user == null || isSuccess) {
      navigate("admin")
    } else {
      alert("not ")
    }
//  sum problems
  }, [user, isLoding, isError, isSuccess, Maseage])

  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <p className="text-center ">Log in to your account</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="email"
            label="Email Address"
            id="email"
            val={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleChange("email")} />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="pass"
            val={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleChange("password")} />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

          </div>
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-blod w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
