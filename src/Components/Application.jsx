import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
function Application() {
  const [application, setApplication] = useState("status");
  function changeMenu(menu) {
    setApplication(application === menu ? "status" : menu);
  }
  return (
    <div className="w-full flex h-screen">
      <div className=" w-fit text-md flex flex-col  *:px-8 *:py-2   *:border-b *:border-r *:border-r-red-500 *:border-l *:border-l-red-500  *:hover:bg-[#C32A30] *:cursor-pointer *:hover:text-white *:text-left ">
        <button className="gradient-bg1 text-white font-bold">
          Application Status
        </button>
        <button
          onClick={() => changeMenu("status")}
          className={`${application === "status" ? "bg-blue-600 text-white" : "bg-white/70"}`}
        >
          Program Transfer <br />
          Status
        </button>
        <button
          onClick={() => changeMenu("placement")}
          className={`${application === "placement" ? "bg-blue-600 text-white" : "bg-white/70"}`}
        >
          Placement <br />
          Registration List
        </button>
        <button
          onClick={() => changeMenu("events")}
          className={`${application === "events" ? "bg-blue-600 text-white" : "bg-white/70"}`}
        >
          Railway <br />
          Concession View
        </button>
        <button
          onClick={() => changeMenu("notice")}
          className={`${application === "notice" ? "bg-blue-600 text-white" : "bg-white/70"}`}
        >
          Cetificate Status
          <br />
          Announcement
        </button>
        <button
          onClick={() => changeMenu("meeting")}
          className={`${application === "meeting" ? "bg-blue-600 text-white" : "bg-white/70"}`}
        >
          Disciplinary Action <br /> view
        </button>
      </div>
      {application === "status" && (
        <div className="flex-1 ml-6 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/70">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Program Transfer Status
            </h1>
            <div className="bg-white/30 p-3 shadow-lg shadow-black">
              <div className="bg-white/70 p-5 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                <div className="text-center bg-white ">
                  <p className="border p-2">No Record Found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {application === "placement" && (
        <div className="flex-1 ml-6 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/70  ">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Placement Registration List
            </h1>
            <div className="bg-white/30 p-3 shadow-lg shadow-black">
              <div className="bg-white/70 p-5 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                <div className="text-center bg-white ">
                  <p className="border p-2">No Record Found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {application === "events" && (
        <div className="flex-1 ml-6 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/70">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Railway Concession View
            </h1>
            <div className="bg-white/30 p-3 shadow-lg shadow-black">
              <div className="bg-white/70 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                <div className="text-center py-5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.7)]">
                  <div className="w-full flex justify-between ">
                    <div className="flex-1 font-bold text-gray-800 ">
                      Form Date :
                      <span className="ml-40">
                        <input
                          placeholder="DD MMMM YYYY"
                          className="border p-1 border-gray-500 placeholder:text-sm ml-5 placeholder:text-center"
                        ></input>
                      </span>
                    </div>
                    <div className="flex-1 font-bold text-gray-800">
                      To Date :
                      <span className="ml-40">
                        <input
                          placeholder="DD MMMM YYYY"
                          className="border p-1 border-gray-500 placeholder:text-sm ml-5 placeholder:text-center"
                        ></input>
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start font-bold text-gray-800 pl-7 mt-7">
                    To Date :
                    <span className="ml-50">
                      <select className="border px-8 py-1 text-sm">
                        <option>Select</option>
                        <option>Pending at Rec Room</option>
                        <option>Pending at DSW</option>
                        <option>Rejected by RecRoom</option>
                        <option>Approved</option>
                        <option>Rejected by DSW</option>
                      </select>
                    </span>
                  </div>
                  <div className="m-6">
                    <table className="w-full border-t-2 border-red-600">
                      <thead className="*:border bg-[#0D628C] text-sm text-white *:p-2">
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Date of Leaving / Reaching</th>
                        <th>Description</th>
                        <th>From Location</th>
                        <th>To Location</th>
                        <th>Status</th>
                        <th>View</th>
                        <th>Print</th>
                      </thead>
                      <tbody>
                        <tr className="text-sm *:border *:border-gray-500 *:p-2">
                          <td>BC2024174</td>
                          <td>SAFIULLAH SHEKH</td>
                          <td>22 Dec 2024</td>
                          <td>Inward Journey</td>
                          <td>Lucknow Junction</td>
                          <td>Belthara Road </td>
                          <td>Rejected by RecRoom</td>
                          <td>
                            <FontAwesomeIcon
                              icon={faEye}
                              className="text-blue-600"
                            ></FontAwesomeIcon>
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faPrint}
                              className="text-orange-500"
                            ></FontAwesomeIcon>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {application === "notice" && (
        <div className="flex-1 ml-6 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/70">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Certificate Status
            </h1>
            <div className="bg-white/30 p-3 shadow-lg shadow-black">
              <div className="bg-white/70 p-5 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                <div className="text-center bg-white ">
                  <p className="border p-2">No Record Found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {application === "meeting" && (
        <div className="flex-1 ml-6 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/70">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Disciplinary Action View
            </h1>
            <div className="bg-white/30 p-3 shadow-lg shadow-black">
              <div className="bg-white/70 p-5 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                <div className="text-center bg-white ">
                  <p className="border p-2">No Record Found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Application;
