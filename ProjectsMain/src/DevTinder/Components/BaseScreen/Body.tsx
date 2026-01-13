import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import type { RootState } from "../../Redux/store";

const Body = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.val);

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      navigate("/postLoginMainScreen");
    }
  }, [user]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Body;
