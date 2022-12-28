import React, { useEffect, useState } from "react";
// import { Button, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const SingUp = () => {
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  let usersData = JSON.parse(localStorage.getItem("users")) ?? [];
  const formik = useFormik({
    initialValues: {
      userName: "",
      surname: "",
      password: "",
      confirmPassword: "",
      country: "",
      city: "",
    },
    onSubmit: (values) => {
      usersData.push(values);
      localStorage.setItem("users", JSON.stringify(usersData));
      navigate("../signin");
    },
  });

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <h1>Sign Up </h1>
          <div className="username">
            <div className="usnam">
              <label htmlFor="userName">Username</label>
            </div>
            <input
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
          </div>
          <div className="surname">
            <div className="surName">
              <label htmlFor="surname">Surname</label>
            </div>
            <input
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
          </div>
          <div className="password">
            <div className="pass">
              <label htmlFor="password">Password</label>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="confirmPassword">
            <div className="confirm">
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="country">
            <div className="count">
              <label htmlFor="country">Select your country</label>
            </div>
            <select name="country" id="country" onChange={formik.handleChange}>
              {country.map((country, i) => {
                return (
                  <option key={i} value={formik.values.country.name}>
                    {country.name}
                  </option>
                );
              })}{" "}
            </select>
          </div>

          <div className="city">
            <div className="ci-ty">
              <label htmlFor="city">Select your city</label>
            </div>
            <select name="city" id="city" onChange={formik.handleChange}>
              {country.map((city, i) => {
                return (
                  <option key={i} value={formik.values.city.capital}>
                    {city.capital}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="btn">
            <button type="submit">Sign Up</button>

            <p>
              {" "}
              Already a member? <a href="../signin"> Sign In </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
