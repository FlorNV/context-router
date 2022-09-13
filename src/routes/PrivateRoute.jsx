import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function PrivateRoute() {
  const { isAuthenticated } = useUserContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
