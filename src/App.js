import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header></Header>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
