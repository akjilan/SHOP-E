import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const handleLoginSubmit = ()=>{

  
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