import React, { useState, useRef, use } from "react";
import Header from "./Header";
import { validateemailPassword } from "../Utilis/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utilis/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utilis/Redux/userSlice";
import { Logo } from "../Utilis/Constants";
const Login = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [signUpFlow, setSignUpFlow] = useState(false);
  const [showPassword, setShowPassword] = useState({
    fieldOne: false,
    fieldtwo: false,
  });
  const [errorHandler, setErrorHandler] = useState({
    B: false,
    P: false,
    E: false,
    Emsg: "",
    Pmsg: "",
  });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const numberRef = useRef(null);
  const nameRef = useRef(null);
  function handleSignUpForm() {
    setSignUpFlow(!signUpFlow);
    setErrorHandler({
      B: false,
      P: false,
      E: false,
      Emsg: "",
      Pmsg: "",
    });
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }
  function handleSignInSignUp() {
    const error = validateemailPassword(
      emailRef.current.value,
      passwordRef.current.value
    );
    console.log(error);
    if (error.errType === "B") {
      setErrorHandler((temp) => ({
        ...temp,
        B: true,
        Emsg: error.Emsg,
        Pmsg: error.Pmsg,
      }));
    } else if (error.errType === "P") {
      setErrorHandler((temp) => ({
        ...temp,
        P: true,
        Pmsg: error.Pmsg,
        E: false,
        Emsg: "",
      }));
    } else if (error.errType === "E") {
      setErrorHandler((temp) => ({
        ...temp,
        E: true,
        Emsg: error.Emsg,
        Pmsg: "",
        P: false,
      }));
    } else {
      setErrorHandler((temp) => ({
        B: false,
        P: false,
        E: false,
        Emsg: "",
        Pmsg: "",
      }));
    }
    if (error.errType !== "S") return;
    if (signUpFlow) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
            phoneNumber: numberRef.current.value,
          })
            .then(() => {
              const { uid, email, displayName, phoneNumber } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, phoneNumber }));
              // navigator("/browse");
              console.log(auth.currentUser);
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {});
    } else {
      console.log("Login from Login Page");
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigator("/browse");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <Header />
      <div className="relative ">
        <div className="w-full h-full " id="backGroundDiv">
          <img src={Logo} alt="logo" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          id="LoginDiv"
          className="h-auto text-white bg-opacity-80 p-10 absolute top-1/2 left-1/4 translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 w-3/12 bg-black "
        >
          <h1 className="font-bold text-white text-4xl mb-3">
            {signUpFlow ? "Sign Up" : "Sign In"}
          </h1>
          {signUpFlow ? (
            <span className="w-full flex flex-col gap-3">
              <input
                ref={nameRef}
                type="text"
                placeholder="Enter Name.."
                className="p-2 m-2 bg-gray-800 text-white"
              />
              <input
                ref={numberRef}
                type="text"
                placeholder="Enter Phone.."
                className="p-2 m-2 bg-gray-800 text-white"
              />
            </span>
          ) : (
            ""
          )}
          <span className="flex flex-col">
            <input
              ref={emailRef}
              type="text"
              placeholder="Enter email.."
              className="p-2 m-2 bg-gray-800 text-white"
            />
            {(errorHandler.E || errorHandler.B) && (
              <p className="text-red-600">{errorHandler.Emsg}</p>
            )}
          </span>

          <span className="flex flex-col">
            <input
              ref={passwordRef}
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
            {(errorHandler.P || errorHandler.B) && (
              <p className="text-red-600">{errorHandler.Pmsg}</p>
            )}
          </span>
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
          <button
            onClick={handleSignInSignUp}
            className="bg-red-600 p-2 rounded-md font-bold text-white"
          >
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
                className="hover:cursor-pointer hover:underline decoration-white font-bold"
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
                className="font-bold hover:cursor-pointer hover:underline decoration-white "
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
