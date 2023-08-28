import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default App;
