import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user.val);
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      navigate("/profile");
    }
  }, [user]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Body;
