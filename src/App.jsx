import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
