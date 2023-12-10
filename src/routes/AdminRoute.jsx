import { useContext } from "react";
import { AdminContext } from "../provider/AdminProvider";
import { Navigate } from "react-router-dom";
import Loading from "../pages/shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useContext(AdminContext);
  if (isLoading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children
  }
  <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
