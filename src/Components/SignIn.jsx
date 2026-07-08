import { useState } from "react";
import erp1 from "../assets/erp 1.jpg";
import erp2 from "../assets/erp 2.jpg";
import erp3 from "../assets/erp 3.png";
import erp4 from "../assets/erp 4.jpg";
import view from "../assets/view.png";
import hide from "../assets/hide.png";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

function SignIn() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [visible, setVisibal] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (user.toLocaleLowerCase() === "bc2024174" && password === "Safiq123@") {
      setError("");
      navigate("/dashboard");
    } else if (password === "Safiq123@") {
      serError("System doesn't recognize password");
    } else {
      setError("System doesn't recognize user id or password");
    }
  }

  return (
    <div className="lg:w-100 w-full mx-5 h-auto lg:ml-230 lg:mt-30 flex flex-col box-border shadow-[0_0_30px_rgba(0,0,0,0.8)]">
      <h1 className="bg-[#db2e2a] text-white text-2xl p-5 text-center">
        Sign In <span className="underline underline-offset-6">To Your</span>
        Account
      </h1>

      <div className="bg-white p-3">
        <div className="flex flex-col *:border gap-3 *:p-2 *:mb-2 mt-2">
          <input
            type="text"
            value={user}
            placeholder="User Name"
            className="border"
            onChange={(e) => setUser(e.target.value)}
            className="outline-none"
          ></input>
          <div className="flex justify-between">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-none outline-none"
            ></input>
            <img
              className="w-5 h-4 object-cover mt-1"
              onClick={() => setshowPassword(!showPassword)}
              src={showPassword ? hide : view}
            />
          </div>
        </div>
        <div className="text-blue-700 flex justify-between my-4 *:text-sm *:cursor-pointer *:hover:underline">
          <p>Forgot Password</p>
          <p>Alumini Registration</p>
        </div>
        {error && (
          <div>
            <p className="text-red-500 text-sm -mt-3 mb-3">{error}</p>
          </div>
        )}
        <button
          className=" w-full bg-blue-600 font-bold text-white p-3 text-center hover:bg-blue-900 cursor-pointer"
          onClick={handleLogin}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}
export default SignIn;
