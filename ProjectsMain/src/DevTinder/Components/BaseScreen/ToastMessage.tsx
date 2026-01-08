type PropType = {
  message: string;
  type: "success" | "info";
};
const ToastMessage = ({ message, type }: PropType) => {
  const notiType: string = "alert alert-" + type;
  return (
    <div className="toast toast-top toast-center">
      <div className={notiType}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ToastMessage;
