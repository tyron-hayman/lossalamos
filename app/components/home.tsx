import React, { FormEvent, useState } from "react";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    Form,
  } from "@remix-run/react";
import Loader from "./loader";
  

  export default function Home() {
    const [loader, setLoader] = useState<boolean>(false);

    let handleSubmit = (event : FormEvent<HTMLFormElement>) => {
      let targetForm = document.getElementById(event.currentTarget.id);
      setLoader(true);
      console.log(targetForm);
      event.preventDefault();
      return false;
    }

    return (
          <div className='mainHomeContainer'>
            <div className='homeSlogan'>
              <h1>Loss<span>Alamos</span></h1>
              <p>Client and DB portal</p>
              {loader ? (
                <Loader />
              ) : (
              <Form id="loginform" onSubmit={(event) => handleSubmit(event)}>
                <input type='text' name='username' id='l_username' placeholder='Username' />
                <input type='password' name='password' id='l_password' placeholder='Password' />
                <button className='buttonMain' id="loginBtn" name='loginBtn'><span>Login</span></button>
                <p className='subtext'>If you are a client in need of account details, please contact <a href=''>support</a>.</p>
              </Form>
              )}
            </div>
          </div>
    );
  }