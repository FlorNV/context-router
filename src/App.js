import React from "react";
import { UserContextProvider } from "./contexts/UserContext";
import AppRouter from "./routes/AppRouter";

const App = () => {
  // const [user, setUser] = useState(null);

  // return (
  //   <UserContext.Provider value={{ user, setUser }}>
  //     <AppRouter />
  //   </UserContext.Provider>
  // );

  return (
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  );
};

export default App;
