import { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";

const Profile = () => {
  const userDetails = useSelector((store) => store.user.val);
  const [userEditDetails, setUserEditDetails] = useState(userDetails);
  const [error, setError] = useState("");

  function handleInputChange(event) {
    const fieldChanged = event.target.id;
    const value = event.target.value;
    const temp = { ...userEditDetails };
    temp[fieldChanged] = value;
    setUserEditDetails(temp);
  }
  function handleSkillsChange(e) {
    setUserEditDetails((prev) => ({
      ...prev,
      skills: e.target.value,
    }));
  }
  function validateInputFields() {
    if (userEditDetails.skills.length == 0) {
      setError("Please add your skills");
      return;
    }
    for (const key in userEditDetails) {
      if (userEditDetails[key] === "" || userEditDetails[key] === undefined) {
        setError(`Please fill ${key} field`);
        return false;
      }
      setError("");
    }
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
              <div onClick={handleSkillsChange}>
                <h1>Click Here</h1>
                <div className="flex flex-col w-full gap-2 bg-white">
                  <span>
                    <input id="JS" type="checkbox" />
                    <label htmlFor="JS">JS</label>
                  </span>
                  <span>
                    <input id="React" type="checkbox" />
                    <label htmlFor="React">React</label>
                  </span>
                  <span>
                    <input id="Redux" type="checkbox" />
                    <label htmlFor="Redux">Redux</label>
                  </span>
                  <span>
                    <input id="Tailwind" type="checkbox" />
                    <label htmlFor="Tailwind">Tailwind</label>
                  </span>
                </div>
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
            <footer className="sticky  bottom-0 mt-4 justify-center font-semibold p-2 w-full">
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
    </div>
  );
};

export default Profile;
