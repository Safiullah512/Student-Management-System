import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function Railway() {
  const [railway, setRailway] = useState("form");
  return (
    <div className="w-full flex h-screen pt-40 overflow-y-auto mb-15">
      <div className=" w-fit text-md flex flex-col  *:px-8 *:py-2   *:border-b *:border-r *:border-r-red-500 *:border-l *:border-l-red-500  *:hover:bg-[#C32A30] *:cursor-pointer *:hover:text-white *:text-left text-lg">
        <button className="gradient-bg1 text-white font-bold">
          Railway Cncession <br /> Form
        </button>
        <button
          onClick={() => setRailway("form")}
          className={`${railway === "form" ? "bg-blue-600 text-white" : "bg-white/70"}`}
        >
          Railway
          <br />
          Concession Form
        </button>
      </div>
      {railway === "form" && (
        <div className="flex-1 ml-5 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/50">
            <h1 className="w-full p-2 text-white font-bold  border-white border gradient-bg shadow-sm shadow-black">
              Railway Concession Form
            </h1>
            <div className="bg-white m-5 shadow-[0_0_8px_rgb(0,0,0,0.3)] shadow-black p-5 font-bold text-sm *:text-gray-900">
              <div className="flex justify-between">
                <div>To</div>
                <div>Date</div>
                <div>
                  :{" "}
                  <input
                    placeholder="15 Jul 2026 "
                    className="bg-gray-200 border border-gray-400 text-sm p-1"
                  ></input>
                </div>
              </div>
              <p>
                To Dean Student's Welfare <br /> Invertis University <br />
                Bareill <br />
                <br />
                Sir,
                <br />I / we would like to request you to kindly issue me /us a
                Railway Concession document as per the following details.
              </p>
              <div className="flex justify-between mt-3">
                <div>Student Name</div>
                <div>
                  :
                  <input
                    placeholder="SAFIULLAH SHEKH"
                    className="p-1 text-black! bg-gray-300 border border-gray-400 ml-5"
                  ></input>
                </div>
                <div>Student ID</div>
                <div>
                  :
                  <input
                    placeholder="BC2024174"
                    className="p-1 text-black! bg-gray-300 border border-gray-400 ml-5"
                  ></input>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div>Gender</div>
                <div className="ml-6">
                  :
                  <input
                    placeholder="Male"
                    className="p-1 text-black! bg-gray-300 border border-gray-400 ml-5"
                  ></input>
                </div>
                <div>Age</div>
                <div>
                  :
                  <input
                    placeholder="20"
                    className="p-1 text-black! bg-gray-300 border border-gray-400 ml-5"
                  ></input>
                </div>
              </div>
              <p className="mt-5">
                I / We am / are students of this university. I / We want to go
                home in ( Winter / Summer / Diwali / Holi) vacations as per the
                following schedule.
              </p>
              <div className="flex justify-between mt-3">
                <div>Description</div>
                <div className="ml-26">
                  :
                  <select className="border border-gray-400 p-1 ml-5 px-20 pl-2">
                    <option>Select</option>
                    <option>Inward Journey</option>
                    <option>Return Journey</option>
                  </select>
                </div>
                <div>Date of Leaving/Reaching Bareilly</div>
                <div>
                  :
                  <input
                    placeholder="Select the date"
                    type="text"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    className="p-1 text-black! border border-gray-400 ml-5 outline-none focus:border-blue-600"
                  ></input>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div>From</div>
                <div className="ml-16">
                  :
                  <input className="p-1 text-black! border border-gray-400 ml-5 px-3"></input>
                </div>
                <div>To</div>
                <div className="ml-10">
                  :
                  <input className="p-1 text-black! border border-gray-400 ml-5"></input>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div>
                  Reservation From (Station & <br /> Railway Name)
                </div>
                <div className="-ml-12">
                  :
                  <input className="p-1 text-black! border border-gray-400 ml-5 px-3"></input>
                </div>
                <div>Vacation Type</div>
                <div className="ml-10">
                  :
                  <input className="p-1 text-black! border border-gray-400 ml-5"></input>
                </div>
              </div>
              <p className="mt-8 mb-5">
                I / We shall be highly obliged to you.
              </p>
              <div className="flex justify-end">
                <div className="text-white view-bg p-1 px-3 rounded-4xl shadow-sm shadow-black hover:bg-amber-400 cursor-pointer text-right w-fit flex items-center">
                  <FontAwesomeIcon
                    icon={faSave}
                    className="mr-1 text-white"
                  ></FontAwesomeIcon>
                  <button className=" text-white ml-auto">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Railway;
