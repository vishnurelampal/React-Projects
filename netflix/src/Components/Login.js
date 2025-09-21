import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [signUpFlow, setSignUpFlow] = useState(false);
  const [showPassword, setShowPassword] = useState({
    fieldOne: false,
    fieldtwo: false,
  });
  function handleSignUpForm() {
    setSignUpFlow(!signUpFlow);
  }
  return (
    <>
      <Header />
      <div className="relative ">
        <div className="w-full h-full " id="backGroundDiv">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
            alt="logo"
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          id="LoginDiv"
          className="h-auto text-white bg-opacity-80 p-10 absolute top-1/2 left-1/4 translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 w-3/12 bg-black "
        >
          <h1 className="font-bold text-white text-4xl">
            {signUpFlow ? "Sign Up" : "Sign In"}
          </h1>
          {signUpFlow ? (
            <span className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Enter Name.."
                className="p-2 m-2 bg-gray-800 text-white"
              />
              <input
                type="text"
                placeholder="Enter Phone.."
                className="p-2 m-2 bg-gray-800 text-white"
              />
            </span>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Enter email.."
            className="p-2 m-2 bg-gray-800 text-white"
          />
          <input
            type={showPassword.fieldOne ? "text" : "password"}
            placeholder="Enter password.."
            className="p-2 m-2 bg-gray-800  text-white"
            onClick={() => {
              setShowPassword((temp) => ({
                ...temp,
                fieldOne: true,
              }));
            }}
            onBlur={() => {
              setShowPassword((temp) => ({
                ...temp,
                fieldOne: false,
              }));
            }}
          />
          {signUpFlow ? (
            <input
              type={showPassword.fieldtwo ? "text" : "password"}
              placeholder="Re-enter password.."
              className="p-2 m-2 bg-gray-800  text-white"
              onClick={() => {
                setShowPassword((temp) => ({
                  ...temp,
                  fieldtwo: true,
                }));
              }}
              onBlur={() => {
                setShowPassword((temp) => ({
                  ...temp,
                  fieldtwo: false,
                }));
              }}
            />
          ) : (
            ""
          )}
          <button className="bg-red-600 p-2 rounded-md font-bold text-white">
            {signUpFlow ? "Sign Up" : "Sign In"}
          </button>

          {signUpFlow ? (
            ""
          ) : (
            <h1 className="text-white font-bold flex justify-center items-center text-2xl ">
              Or
            </h1>
          )}

          {signUpFlow ? (
            ""
          ) : (
            <button className="bg-white p-2 rounded-md font-bold text-black">
              Use a Sign In Code
            </button>
          )}
          {signUpFlow ? (
            ""
          ) : (
            <span className="flex gap-1">
              <p>New to Netflix?</p>
              <p
                onClick={handleSignUpForm}
                className="hover:cursor-pointer hover:underline decoration-white "
              >
                Sign up now.
              </p>
            </span>
          )}
          {signUpFlow ? (
            <span className="flex gap-1">
              <p>Have an Account?</p>
              <p
                onClick={handleSignUpForm}
                className="hover:cursor-pointer hover:underline decoration-white "
              >
                Login Here..
              </p>
            </span>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
