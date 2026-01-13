import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import LoginFields from "./LoginFields";
type Props = {
  handleClose: () => void;
};
const LoginSignUpCard = ({ handleClose }: Props) => {
  useEffect(() => {
    function closeModalViaEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    document.addEventListener("keydown", closeModalViaEsc);
    return () => {
      document.removeEventListener("keydown", closeModalViaEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    <div
      id="overlayDiv"
      className="w-screen h-screen z-30 inset-0 bg-black/40  fixed top-0 left-0 flex justify-center items-center"
    >
      <div
        id="InnerChildMainDiv"
        className=" flex flex-col mt-10 h-auto py-3 bg-white text-black rounded-2xl w-4/12   shadow-sm"
      >
        <div
          id="closeIcon"
          className=" font-bold text-xl flex justify-end p-2 -mt-4"
        >
          <button
            onClick={handleClose}
            className="text-[#939BA7] cursor-pointer"
          >
            <CloseIcon sx={{ fontSize: "36px" }} />
          </button>
        </div>

        <div
          id="contentDiv"
          className="flex flex-col items-center justify-center"
        >
          <LoginFields />
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default LoginSignUpCard;
