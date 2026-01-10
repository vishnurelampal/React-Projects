import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";
type UserDetailsDataProp = {
  _id: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: string | number;
};
const DashboardMain = () => {
  const [feedData, setFeedData] = useState<UserDetailsDataProp[]>([]);
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
  return (
    <>
      <div className="flex gap-10 ">
        <div className="w-3/12 bg-white min-h-screen">LeftNavBar</div>
        <div className="grow flex justify-center">
          <div className="stack pt-10">
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
    </>
  );
};

export default DashboardMain;
