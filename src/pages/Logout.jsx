import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

function Logout() {
  const { logout } = useUserContext();
  useEffect(() => logout());
  return null;
}

export default Logout;
