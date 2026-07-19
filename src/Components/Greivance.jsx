import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
function Grievance() {
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
            Grievance
          </button>
          <button
            onClick={() => handleMenu("grievance")}
            className={`${grievance === "grievance" ? "bg-blue-600 text-white" : "bg-white/70"}`}
          >
            Grievance
          </button>
          <button
            onClick={() => handleMenu("status")}
            className={`${grievance === "status" ? "bg-blue-600 text-white" : "bg-white/70"}`}
          >
            Grievance Status
          </button>
        </div>
        {grievance === "grievance" && (
          <div className="flex-1 min-w-0  ml-8 animate-slideUp w-full">
            <div className="bg-white/70">
              <div className="w-full border-2 border-red-600 ">
                <h1 className="w-full p-2 text-white font-bold  border-white border gradient-bg shadow-sm shadow-black">
                  Grievance
                </h1>
                <div className="bg-white/85 m-4 p-6   gap-10 shadow-[0_0_20px_rgba(0,0,0,0.7)] ">
                  <div className="grid grid-cols-2 gap-8">
                    <div className=" grid grid-cols-[240px_20px_1fr]">
                      <div className="font-bold">Name</div>
                      <p>:</p>
                      <div>
                        <input
                          className="p-1 bg-gray-200 px-10 pl-4 border border-gray-400 placeholder:text-gray-600"
                          placeholder="SAFIULLAH SHEKH"
                        ></input>
                      </div>
                    </div>
                    <div className=" grid grid-cols-[240px_20px_1fr]">
                      <div className="font-bold">Student ID</div>
                      <p>:</p>
                      <div>
                        <input
                          className="p-1 bg-gray-200 px-10 pl-4 border border-gray-400 placeholder:text-gray-600"
                          placeholder="SAFIULLAH SHEKH"
                        ></input>
                      </div>
                    </div>
                    <div className=" grid grid-cols-[240px_20px_1fr]">
                      <div className="font-bold">Program</div>
                      <p>:</p>
                      <div>
                        <input
                          className="p-1 bg-gray-200 px-10 pl-4 border border-gray-400 placeholder:text-gray-600"
                          placeholder="SAFIULLAH SHEKH"
                        ></input>
                      </div>
                    </div>
                    <div className=" grid grid-cols-[240px_20px_1fr]">
                      <div className="font-bold">Semester /Year</div>
                      <p>:</p>
                      <div>
                        <input
                          className="p-1 bg-gray-200 px-10 pl-4 border border-gray-400 placeholder:text-gray-600"
                          placeholder="SAFIULLAH SHEKH"
                        ></input>
                      </div>
                    </div>
                    <div className=" grid grid-cols-[240px_20px_1fr]">
                      <div className="font-bold">Department</div>
                      <p>:</p>
                      <div>
                        <select className="*:hover:bg-blue-500 *:hover:text-white px-30 border border-gray-400 p-1 pl-3 bg-white">
                          <option>Select</option>
                          <option>IT</option>
                          <option>Purchase</option>
                          <option>Examination</option>
                          <option>Hostel</option>
                          <option>Transport</option>
                          <option>Academic</option>
                        </select>
                      </div>
                    </div>
                    <div className=" grid grid-cols-[240px_20px_1fr]">
                      <div className="font-bold">Remarks</div>
                      <p>:</p>
                      <div>
                        <input className="p-1 bg-white px-10 pl-4 border border-gray-400 "></input>
                      </div>
                    </div>
                    <div className=" grid grid-cols-[240px_20px_1fr]">
                      <div className="font-bold">File Upload</div>
                      <p>:</p>
                      <div className=" bg-white px-10 pl-4 border border-gray-400 p-1 flex  items-center">
                        <label className=" text-xs border border-gray-400 p-1 bg-gray-200 px-4 rounded">
                          Choose File
                          <input
                            type="file"
                            className="hidden"
                            onChange={handlefile}
                          ></input>
                        </label>
                        <p className="text-xs ml-3">{file}</p>
                      </div>
                    </div>
                  </div>
                  <p className="ml-60 mt-3 text-orange-600 font-bold">
                    File size should not be more than 2MB
                  </p>
                  <div className="flex justify-end">
                    <div className="text-white view-bg p-1 px-3 rounded-4xl shadow-sm shadow-black hover:bg-amber-400 cursor-pointer">
                      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      <button className=" text-white">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {grievance === "status" && (
          <div className="flex-1 min-w-0 ml-8 animate-slideUp w-full">
            <div className="bg-white/70">
              <div className="w-full border-2 border-red-600 ">
                <h1 className="w-full p-2 text-white font-bold  border-white border gradient-bg shadow-sm shadow-black">
                  Grievance
                </h1>
                <div className="bg-white/85 m-4 p-5   gap-10 shadow-[0_0_20px_rgba(0,0,0,0.7)] ">
                  <div className="flex justify-between gap-10 text-sm">
                    <div className="flex gap-6">
                      <div className="font-bold">Department</div>
                      <p>:</p>
                      <div>
                        <select className="*:hover:bg-blue-500 *:hover:text-white px-15 border border-gray-400 p-1 pl-3 bg-white">
                          <option>Select</option>
                          <option>IT</option>
                          <option>Purchase</option>
                          <option>Examination</option>
                          <option>Hostel</option>
                          <option>Transport</option>
                          <option>Academic</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-7">
                      <div className="font-bold">
                        From <br />
                        Date
                      </div>
                      <p>:</p>
                      <div>
                        <input
                          className="p-1 bg-white border border-gray-400 "
                          type="date"
                        ></input>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="font-bold">To Date</div>
                      <p>:</p>
                      <div>
                        <input
                          className="p-1 bg-white   border border-gray-400 placeholder:text-gray-400"
                          type="date"
                        ></input>
                      </div>
                    </div>

                    <div className="text-white view-bg rounded-4xl shadow-lg shadow-black  text-sm px-4 cursor-pointer w-fit p-2 hover:bg-[#CF4E33]">
                      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      <button className=" text-white">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Grievance;
