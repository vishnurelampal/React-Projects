import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const CommonModal = ({ title, buttonData, navPage }) => {
  const modalRoot = document.getElementById("commonModalRoot");
  if (!modalRoot) return null;

  return createPortal(
    <div className="z-50 inset-0 bg-black/40 fixed min-w-screen min-h-screen p-2 flex items-center align-middle justify-center">
      <div className="w-sm h-1/4 bg-white rounded-lg shadow-lg p-4 text-black flex justify-center ">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">{title}</h1>
          <div className="flex justify-center mt-16">
            <Link to={`/${navPage}`}>
              <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-all duration-100">
                {buttonData}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default CommonModal;
