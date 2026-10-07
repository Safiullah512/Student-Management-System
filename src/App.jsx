import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Grievance from "./Components/Greivance";
import SignIn from "./Components/SignIn";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/dashboard/grievance"
          element={<Grievance></Grievance>}
        ></Route>
        <Route path="navbar" element={<Navbar></Navbar>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
