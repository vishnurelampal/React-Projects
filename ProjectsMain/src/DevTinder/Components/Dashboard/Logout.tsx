import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../Redux/userSlice";
import CommonModal from "../BaseScreen/CommonModal";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(removeUser());
    navigate("/");
  }
  return (
    <>
      <CommonModal
        title="Logout"
        content="Are you sure you want to log out?"
        buttonData="Logout ?"
        handleClick={handleClick}
      />
    </>
  );
};

export default Logout;
