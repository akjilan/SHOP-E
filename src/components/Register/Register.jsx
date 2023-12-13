import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Usercontext";

const Register = () => {
  const { createAccount } = useContext(AuthContext);
  const [errorText,setErrorText] = useState('');
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    createAccount(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        alert("Registration is succesfull");
      })
      .catch((error) => {
        setErrorText(error).message;
      });
  };
  return (
    <>
      <div className=" hero mx-auto  bg-base-200">
        <div className=" hero-content flex-col gap-5 mt-5">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl mb-3 font-bold">
              Please Create an Account
            </h3>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleRegisterSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-xs my-3 mt-2 text-black">
                <p>
                  Already have an account ?
                  <button className="text-black btn btn-xs btn-outline ms-2 ">
                    <Link to="/login">Login</Link>
                  </button>
                </p>
              </div>
              <p className="text-xs text-black font-bold">
                {errorText}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
