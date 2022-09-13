import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function PublicRoute() {
  const { isAuthenticated } = useUserContext();

  if (isAuthenticated) {
    return <Navigate to="/private" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
