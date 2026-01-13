import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUser } from "../../Redux/userSlice";
import { BASE_URL } from "../../Utils/Constants";
import Loader from "../BaseScreen/Loader";
type Fields = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  emailId: string;
  password: string;
  age: string;
};
type LoginDataProps = {
  error: string;
  isLoading: boolean;
};
const LoginFields = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<Fields>({
    firstName: "",
    lastName: "",
    age: "19",
    dateOfBirth: "",
    gender: "",
    emailId: "vishnurelampal@gmail.com",
    password: "Vishnu@7",
  });
  const [loginFlag, setLoginFlag] = useState<boolean>(false);
  const [loginDataProps, setLoginDataProps] = useState<LoginDataProps>({
    error: "",
    isLoading: false,
  });
  const dispatch = useDispatch();

  async function handleSignUp() {
    try {
      setLoginDataProps((prev) => ({ ...prev, isLoading: true }));
      let loginDataCopy: Fields;
      let url: string;

      if (!loginFlag) {
        loginDataCopy = {
          emailId: loginData.emailId,
          password: loginData.password,
        } as Fields;
        url = BASE_URL + "/login";
      } else {
        loginDataCopy = { ...loginData } as Fields;

        url = BASE_URL + "/signup";
      }
      for (const key in loginDataCopy) {
        if (loginData[key as keyof Fields] === "") {
          setLoginDataProps({
            error: `Please fill the ${key} field`,
            isLoading: false,
          });
          return;
        }
      }
      const res = await axios.post(url, loginDataCopy, {
        withCredentials: true,
      });
      console.log(res.data);

      dispatch(AddUser(res.data));
      setLoginDataProps({ error: "", isLoading: false });
      // navigate("/profile");
    } catch (err) {
      const error = err as AxiosError;
      const errorMessage: string =
        (error.response?.data as string) || "An error occurred";
      setLoginDataProps({ error: errorMessage, isLoading: false });
      navigate("/");
      console.log("this is err", err);
    }
  }
  useEffect(() => {
    function eventKey(event: KeyboardEvent) {
      if (event.key === "Enter") {
        handleSignUp();
      }
    }
    document.addEventListener("keydown", eventKey);
    return () => {
      document.removeEventListener("keydown", eventKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData, loginFlag]);
  return (
    <>
      <h1 className="font-bold text-3xl mb-2">
        {loginFlag ? "Create account" : "Sign in"}
      </h1>
      <div className="flex flex-col w-8/12 ">
        {loginFlag && (
          <span className=" flex flex-col gap-2 *:p-2 *:border *:border-black  *:rounded-md mt-3 ">
            <input
              type="text"
              placeholder="First name"
              value={loginData.firstName}
              onChange={(e) =>
                setLoginData({ ...loginData, firstName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last name"
              value={loginData.lastName}
              onChange={(e) =>
                setLoginData({ ...loginData, lastName: e.target.value })
              }
            />
            <input
              type="date"
              placeholder="dateOfBirth"
              value={loginData.dateOfBirth}
              onChange={(e) =>
                setLoginData({ ...loginData, dateOfBirth: e.target.value })
              }
            />
            <select
              value={loginData.gender}
              onChange={(e) =>
                setLoginData({ ...loginData, gender: e.target.value })
              }
              className=" p-2 border border-black rounded-md mb-3"
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </span>
        )}
        <span className=" flex flex-col gap-2 *:p-2 *:border *:border-black  *:rounded-md mb-3">
          <input
            type="emailId"
            placeholder="emailId"
            value={loginData.emailId}
            onChange={(e) =>
              setLoginData({ ...loginData, emailId: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </span>
      </div>
      <span>
        <button
          onClick={handleSignUp}
          className="bg-red-500 text-white p-3 cursor-pointer rounded-xl"
        >
          {loginFlag ? "Sign Up" : "Sign In"}
        </button>
      </span>
      <span className="flex flex-row gap-1 mt-1">
        <p>
          {loginFlag ? "Already have an account?" : "Don't have an account?"}
        </p>
        <p
          onClick={() => {
            setLoginFlag(!loginFlag);
          }}
          className="underline text-blue-500 cursor-pointer"
        >
          {loginFlag ? "Sign in here" : "Sign up here"}
        </p>
      </span>
      {loginDataProps?.error && (
        <p className="p-2 text-red-400 m-2">{loginDataProps?.error} !</p>
      )}
      {loginDataProps.isLoading && <Loader />}
    </>
  );
};

export default LoginFields;
