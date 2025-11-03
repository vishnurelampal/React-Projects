import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center  h-screen bg-gray-800">
      <div className="card w-96 bg-gray-600 shadow-sm h-1/2 mt-10">
        <h1 className="text-3xl font-bold text-center mt-4 text-white">
          Login
        </h1>
        <div className="card-body">
          <input
            className="input validator"
            type="email"
            required
            placeholder="mail@site.com"
          />
          <div className="validator-hint">Enter valid email address</div>
          <input
            type="password"
            className="input validator"
            required
            placeholder="Password"
            minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          <p className="validator-hint">
            Must be more than 8 characters, including
            <br />
            At least one number
            <br />
            At least one lowercase letter
            <br />
            At least one uppercase letter
          </p>
          <div className=" flex justify-center">
            <button className="btn btn-primary btn-block">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
