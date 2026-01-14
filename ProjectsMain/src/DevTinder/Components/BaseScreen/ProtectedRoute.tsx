import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../../Redux/store";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.val);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
