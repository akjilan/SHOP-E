import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/Usercontext'

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLoginSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset();
      alert('login succesfull');
      navigate(from, {replace:true});
    })
    .catch(error=>{
      console.log(error.message);
    })
  
  }
  return (
  <>
  <div className="hero gap-4 min-h-screen bg-base-200 ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl mb-4 font-bold">Login Here!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginSubmit} className="card-body">
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex justify-center mx-auto font-semibold text-xs text-black my-3 ">
              <p>
                Don't have an account ?
                <button className="text-black btn btn-sm btn-outline ms-2">
                  <Link to="/register">Register</Link>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default Login