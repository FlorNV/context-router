import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { userData } from "../helpers/userData";

const MY_AUTH_APP = "MY_AUTH_APP_1";
const { data } = userData;

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("USER_DATA") ?? null);

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(MY_AUTH_APP) ?? false
  );

  const login = useCallback(function () {
    localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);

    localStorage.setItem("USER_DATA", JSON.stringify(data));
    setUser(data);
  }, []);

  const logout = useCallback(function () {
    localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);

    localStorage.removeItem("USER_DATA");
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      user,
    }),
    [login, logout, isAuthenticated, user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useUserContext() {
  return useContext(UserContext);
}
