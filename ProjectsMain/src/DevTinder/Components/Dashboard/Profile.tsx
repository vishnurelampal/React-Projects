import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import { AddUser } from "../../Redux/userSlice";
import { BASE_URL, SkillOption } from "../../Utils/Constants";
import ToastMessage from "../BaseScreen/ToastMessage";
import Cards from "./Cards";

type UserEditDetails = {
  _id?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  age?: string | number;
  skills?: string[];
  emailId?: string;
};

const Profile = () => {
  const userDetails = useSelector((store: RootState) => store.user.val);
  const [userEditDetails, setUserEditDetails] = useState<UserEditDetails>(
    userDetails || {}
  );
  const [error, setError] = useState("");
  const [skillDropDownVal] = useState<string[]>(SkillOption);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    userDetails?.skills || []
  );
  const [showToast] = useState<boolean>(false);
  const dispatch = useDispatch();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fieldChanged = event.target.id as keyof UserEditDetails;
    const value = event.target.value;
    setUserEditDetails((prev) => ({
      ...prev,
      [fieldChanged]: value,
    }));
  }
  function handleSkillSelect(skills: string) {
    if (selectedSkills.includes(skills)) {
      setSelectedSkills((prev) => prev.filter((item) => item !== skills));
      return;
    }
    setSelectedSkills((prev) => [...prev, skills]);
  }
  function validateInputFields() {
    for (const key in userEditDetails) {
      const typedKey = key as keyof UserEditDetails;
      if (
        userEditDetails[typedKey] === "" ||
        userEditDetails[typedKey] === undefined
      ) {
        setError(`Please fill ${key} field`);
        return false;
      }
    }
    setError("");
    updateProfile();
  }

  async function updateProfile() {
    try {
      console.log(userEditDetails.skills);
      const res = await axios.patch(
        BASE_URL + "/profile/updateDetails",
        {
          firstName: userEditDetails.firstName,
          lastName: userEditDetails.lastName,
          emailId: userEditDetails.emailId,
          age: userEditDetails.age,
          gender: userEditDetails.gender,
          skills: userEditDetails.skills,
        },
        { withCredentials: true }
      );
      console.log(res.data);
      dispatch(AddUser(userEditDetails));
    } catch (err) {
      console.log(err);
    }
  }
  function handleBlur(): void {
    setUserEditDetails((prev) => ({ ...prev, skills: selectedSkills }));
  }
  if (!userDetails) return null;
  return (
    <div className="flex justify-center pt-20">
      <div className="w-11/12">
        <div className="flex w-full justify-center">
          <div className="bg-[#F0F2F4] w-1/2 p-2 rounded-2xl mx-auto ">
            <h1 className="pb-2 text-black font-bold text-2xl">Add Details</h1>
            <form className="flex flex-col justify-center *:ml-8 gap-2 mt-6 w-8/12 ">
              <input
                id="firstName"
                type="text"
                placeholder="FirstName"
                className="input input-md"
                value={userEditDetails.firstName}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                id="lastName"
                type="text"
                placeholder="LastName"
                className="input input-md"
                value={userEditDetails.lastName}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                id="emailId"
                type="text"
                disabled={true}
                placeholder="Email"
                className="input input-md"
                value={userEditDetails.emailId}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                id="gender"
                type="text"
                disabled={true}
                placeholder="Gender"
                className="input input-md"
                value={userEditDetails.gender}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                id="age"
                type="text"
                placeholder="Age"
                className="input input-md"
                value={userEditDetails.age}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <div className="dropdown -pl-4" onBlur={handleBlur}>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 w-xs text-start flex bg-white justify-between"
                >
                  {selectedSkills?.length === 0 ? (
                    <h1>Select Skills</h1>
                  ) : (
                    <span className="flex gap-1">
                      {selectedSkills.map((item) => (
                        <span
                          key={item}
                          className="flex justify-between gap-1 rounded-md px-1 border-2  border-blue-500 font-black"
                        >
                          <h1>{item}</h1>
                        </span>
                      ))}
                    </span>
                  )}
                  <h1>🔽</h1>
                </div>
                <ul
                  tabIndex={-1}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  {skillDropDownVal.map((item) => (
                    <li
                      className="flex flex-row justify-between cursor-pointer"
                      key={item}
                      onClick={() => handleSkillSelect(item)}
                    >
                      <h1>{item}</h1>
                      {selectedSkills.includes(item) && <h1>✔️</h1>}
                    </li>
                  ))}
                </ul>
              </div>

              <input
                id="lastName"
                type="text"
                placeholder="Photo"
                className="input input-md"
              />
              <input
                id="lastName"
                type="text"
                placeholder="Preferences"
                className="input input-md"
              />
              <input
                id="lastName"
                type="text"
                placeholder="Location"
                className="input input-md"
              />
              {error && <p>{error}</p>}
            </form>
            <footer className="  bottom-0 mt-4 justify-center font-semibold p-2 w-full">
              <button
                className="bg-black text-white px-3 py-2 cursor-pointer hover:text-green-400  transition-all duration-200   rounded-xl ml-8"
                onClick={validateInputFields}
              >
                Save
              </button>
            </footer>
          </div>

          <div className="relative">
            <h1 className="absolute z-2 left-20 text-white font-bold text-2xl">
              Preview
            </h1>
            <Cards userDetails={userEditDetails} showButton={false} />
          </div>
        </div>
      </div>
      {showToast && <ToastMessage message="Skill already added" type="info" />}
    </div>
  );
};

export default Profile;
