import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommonModal from "../BaseScreen/CommonModal";
import Cards from "./Cards";

const DashboardMain = () => {
  const [feedData, setFeedData] = useState([]);
  useEffect(() => {
    async function showFeed() {
      try {
        const res = await axios.get(
          "http://localhost:7000/feed?page=1&limit=10",
          { withCredentials: true }
        );
        setFeedData(res?.data);
      } catch (err) {
        console.log(err);
      }
    }
    showFeed();
  }, []);
  const loggedUserData = useSelector((store) => store.user.val);

  console.log(
    "loggedUserData in dashboard main:",
    loggedUserData.skills.length
  );
  return (
    <div className="flex gap-10 mt-10">
      {!(loggedUserData.skills.length > 0) && (
        <CommonModal
          title="We would love to know more about you!"
          buttonData="Take me there"
          navPage="profile"
        />
      )}
      <div className="w-3/12 bg-white min-h-screen">LeftNavBar</div>
      <div className="grow flex justify-center">
        <div className="stack">
          {feedData.length > 0 &&
            feedData.map((userDetails) => (
              <Cards
                userDetails={userDetails}
                key={userDetails._id}
                showButton={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
