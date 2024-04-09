import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {

  const [logdata, setData] = useState({
    email: "",
    password: "",   
});

  // console.log(logdata);

  const adddata = (e) => {
    const { name, value } = e.target;

    // console.log(name, value);

    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };  


  return (
    <>
     <div className="container">
    <div className="login-page-image-big-screen">
      <img src="./sm2.jpg" alt="" />
    </div>  
    <section>
      <div className="sign_container">
        <div className="sign_form">
        <div className="sign_header ">
          <img src="./adm.png" alt="" />
        </div>
          <form>
            <h1>Sign-In</h1>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={adddata}
                value={logdata.email}
                id="email"
                placeholder="admedusociety@gmail.com"
                required
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={logdata.password}
                id="password"
                placeholder="At least 6 characters"
                required
              />
            </div>
            <button type="submit" className="signin_btn">
              login
            </button> 
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New to ADM?</p>
          <button>
            <NavLink to="/register">Create your ADM Account</NavLink>
          </button>
        </div>
      </div>
  </section>
  </div>
  </>
  );
};

export default SignIn;
