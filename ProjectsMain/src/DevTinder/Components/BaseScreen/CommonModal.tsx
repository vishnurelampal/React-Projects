import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
type CommonModalProps = {
  title: string;
  buttonData: string;
  content: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};
const CommonModal = ({
  title,
  buttonData,
  content,
  handleClick,
}: CommonModalProps) => {
  const navigate = useNavigate();
  const modalRoot = document.getElementById("commonModalRoot");
  if (!modalRoot) return null;
  function closeModal() {
    navigate(-1);
  }
  return createPortal(
    <div className="z-50 inset-0 bg-black/40 fixed min-w-screen min-h-screen p-2 flex  justify-center">
      <div className="w-sm h-2/6 bg-white rounded-lg shadow-lg p-4 text-black mt-28 flex justify-center ">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-bold">{title}</h1>
          <p className="">{content}</p>
          <div className="flex flex-col justify-center mt-6 gap-2">
            <button
              onClick={handleClick}
              className="bg-black cursor-pointer text-white px-4 py-2 rounded-md hover:text-[#D3D3D5] transition-all duration-100"
            >
              {buttonData}
            </button>
            <button
              onClick={closeModal}
              className=" cursor-pointer text-black px-4 py-2 hover:bg-[#ECEDED] rounded-md "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default CommonModal;
