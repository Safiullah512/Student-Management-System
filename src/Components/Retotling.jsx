import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
function Retotling() {
  const [grievance, setGrievance] = useState("grievance");
  const [file, setFile] = useState("No file chosen");
  function handleMenu(menu) {
    setGrievance(grievance === menu ? "grievance" : menu);
  }
  function handlefile(e) {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0].name);
    }
  }
  return (
    <div>
      <div className="w-full flex h-screen pt-40 overflow-y-auto mb-15">
        <div className=" w-fit text-md flex flex-col  *:px-8 *:py-2   *:border-b *:border-r *:border-r-red-500 *:border-l *:border-l-red-500  *:hover:bg-[#C32A30] *:cursor-pointer *:hover:text-white *:text-left text-lg">
          <button className="gradient-bg1 text-white font-bold">
            Examination
          </button>
          <button
            onClick={() => handleMenu("grievance")}
            className={`${grievance === "grievance" ? "bg-blue-600 text-white" : "bg-white/70"}`}
          >
            Re-Evalution Form
          </button>
          <button
            onClick={() => handleMenu("status")}
            className={`${grievance === "status" ? "bg-blue-600 text-white" : "bg-white/70"}`}
          >
            Re-Totaling Form
          </button>
        </div>
        {grievance === "grievance" && (
          <div className="flex-1 ml-8 mr-2 animate-slideUp">
            <div className="w-full border-2 border-red-600 bg-white/70">
              <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
                Re-Evalution Form
              </h1>
              <div className="bg-white/30 p-5 shadow-lg shadow-black">
                <div className="bg-white/70 p-10 shadow-[0_0_10px_rgba(0,0,0,0.7)] pl-4 font-bold pr-155">
                  The Re-Evaluation Form is yet to be Opened.............
                </div>
              </div>
            </div>
          </div>
        )}
        {grievance === "status" && (
          <div className="flex-1 ml-8 mr-2 animate-slideUp">
            <div className="w-full border-2 border-red-600 bg-white/70">
              <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
                Re-Evalution Form
              </h1>
              <div className="bg-white/30 p-5 shadow-lg shadow-black">
                <div className="bg-white/70 p-10 shadow-[0_0_10px_rgba(0,0,0,0.7)] pl-4 font-bold pr-155">
                  The Re-Evaluation Form is yet to be Opened.............
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Retotling;
