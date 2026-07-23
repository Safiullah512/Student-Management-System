import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPrint } from "@fortawesome/free-solid-svg-icons";
function HomeSidebar() {
  const [activeBtn, setActiveBtn] = useState("");
  function handleBtn(menu) {
    setActiveBtn(activeBtn === menu ? "" : menu);
  }
  return (
    <>
      <div className="w-full lg:block hidden">
        <div className=" w-full flex">
          <div className=" w-fit text-md flex flex-col *:px-8 *:py-3  *:bg-white/80 *:border-b *:border-r *:border-r-red-500 *:border-l *:border-l-red-500 ml-2 *:hover:bg-[#C32A30] *:cursor-pointer *:hover:text-white overflow-y-auto pt-41">
            <button className="gradient-bg1 font-extrabold text-white border-2! border-white!">
              Home
            </button>
            <button
              className="border border-red-500"
              onClick={() => handleBtn("notifications")}
            >
              Notifications
            </button>
            <button onClick={() => handleBtn("announcement")}>
              Announcement
            </button>
            <button onClick={() => handleBtn("events")}>Events</button>
            <button>
              Circular-Notice<br></br>/Announcement
            </button>
            <button onClick={() => handleBtn("meeting")}>Meeting View</button>
          </div>
          {activeBtn === "announcement" && (
            <div className="flex-1 ml-6 mr-2 animate-slideUp pt-40">
              <div className="w-full border-2 border-red-600 bg-white/70">
                <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
                  Announcement
                </h1>
                <div className="w-full p-5">
                  <table className="border-t-2 border-red-600 w-full text-white text-center border-separate border-spacing-x-0.5">
                    <thead>
                      <tr className="*:bg-[#0D628C] p-1 *:border-spacing-1">
                        <td>Announcement Text</td>
                        <td>From Date</td>
                        <td>To Date</td>
                        <td>Academic Year</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeBtn === "events" && (
            <div className="flex-1  ml-6 mr-2 animate-slideUp pt-40">
              <div className="w-full h-screen border-2 border-red-600 bg-white/70">
                <h1 className="w-full  p-2 text-white font-bold  border-white border-2 gradient-bg">
                  Announcement
                </h1>
                <div className="w-full h-screen"></div>
              </div>
            </div>
          )}
          {activeBtn === "meeting" && (
            <div className="flex-1 ml-6 mr-2 animate-slideUp pt-40">
              <div className="w-full border-2 border-red-600 bg-white/70">
                <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
                  Invertis Meeting
                </h1>
                <div className="bg-white/30 p-3 shadow-lg shadow-black">
                  <div className=" shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                    <div className="text-center py-5 bg-white/50 shadow-[0_0_8px_rgba(0,0,0,0.7)]">
                      <div className="w-full grid grid-cols-[200px_30px_1fr_200px_30px_1fr] gap-x-5 gap-y-3">
                        <p className="font-bold">
                          From Date <b className="text-red-600">*</b>
                        </p>
                        <p>:</p>
                        <span>
                          <input
                            placeholder="DD MMMM YYYY"
                            className="border p-1 border-gray-500 placeholder:text-sm placeholder:text-center placeholder:pl-3"
                          ></input>
                        </span>
                        <p className="font-bold">
                          To Date <b className="text-red-600">*</b>
                        </p>
                        <p>:</p>
                        <span>
                          <input
                            placeholder="DD MMMM YYYY"
                            className="border p-1 border-gray-500 placeholder:text-sm placeholder:text-center placeholder:pl-3"
                          ></input>
                        </span>
                        <p className="font-bold">To Date</p>
                        <p>:</p>
                        <span>
                          <input className="border px-4 py-1 text-sm border-gray-500"></input>
                        </span>
                      </div>

                      <div className="m-6">
                        <p className="w-full text-center border border-gray-400 bg-white p-1">
                          There are no record to display.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeBtn === "notifications" && (
            <div className="flex-1 ml-6 mr-2 animate-slideUp pt-40">
              <div className="w-full border-2 border-red-600 bg-white/70">
                <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
                  Invertis Meeting
                </h1>
                <div className="bg-white/30 p-3 shadow-lg shadow-black">
                  <div className=" shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                    <div className="text-center py-5 bg-white/50 shadow-[0_0_8px_rgba(0,0,0,0.7)]">
                      <div className="flex w-full justify-between px-5">
                        <div className="flex items-center gap-3 font-bold ">
                          <p>Show</p>
                          <select className="border border-yellow-500  bg-[linear-gradient(to_right,white_60%,gray_40%)] text-gray-600 rounded px-1">
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>All</option>
                          </select>
                          <p>Rows</p>
                        </div>
                        <input
                          placeholder="Select"
                          className="border border-gray-400 p-1"
                        ></input>
                      </div>
                      <div className="w-full p-5">
                        <table className="border-t-2 border-red-600 w-full text-white border-separate border-spacing-x-0.5 text-left border-l-1 border-l-black">
                          <thead>
                            <tr className="p-1 *:border-spacing-1 *:p-1 ">
                              <td className="bg-[#0671B6]">
                                Announcement Text
                              </td>
                              <td className="bg-[#CF4E33]">From Date</td>
                              <td className="bg-[#CF4E33]">To Date</td>
                              <td className="bg-[#CF4E33]">Academic Year</td>
                            </tr>
                          </thead>
                        </table>
                        <p className="border border-gray-400 bg-white text-left pl-3">
                          No data available in table
                        </p>
                      </div>
                      <div className="w-full p-5">
                        <table className="border-t-2 border-red-600 w-full text-white text-center border-separate border-spacing-x-0.5">
                          <thead>
                            <tr className="*:bg-[#0D628C] p-1 *:border-spacing-1">
                              <td>Announcement Text</td>
                              <td>From Date</td>
                              <td>To Date</td>
                              <td>Academic Year</td>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="lg:hidden">
        <div className=" w-full flex">
          <div className=" w-fit text-md flex flex-col *:px-8 *:py-3  *:bg-white/80 *:border-b *:border-r *:border-r-red-500 *:border-l *:border-l-red-500 ml-2 *:hover:bg-[#C32A30] *:cursor-pointer *:hover:text-white overflow-y-auto pt-41">
            <button className="gradient-bg1 font-extrabold text-white border-2! border-white!">
              Home
            </button>
            <button
              className="border border-red-500"
              onClick={() => handleBtn("notifications")}
            >
              Notifications
            </button>
            <button onClick={() => handleBtn("announcement")}>
              Announcement
            </button>
            <button onClick={() => handleBtn("events")}>Events</button>
            <button>
              Circular-Notice<br></br>/Announcement
            </button>
            <button onClick={() => handleBtn("meeting")}>Meeting View</button>
          </div>
          {activeBtn === "announcement" && (
            <div className="flex-1 ml-6 mr-2 animate-slideUp pt-40">
              <div className="w-full border-2 border-red-600 bg-white/70">
                <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
                  Announcement
                </h1>
                <div className="w-full p-5">
                  <table className="border-t-2 border-red-600 w-full text-white text-center border-separate border-spacing-x-0.5">
                    <thead>
                      <tr className="*:bg-[#0D628C] p-1 *:border-spacing-1">
                        <td>Announcement Text</td>
                        <td>From Date</td>
                        <td>To Date</td>
                        <td>Academic Year</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeBtn === "events" && (
            <div className="flex-1  ml-6 mr-2 animate-slideUp pt-40">
              <div className="w-full h-screen border-2 border-red-600 bg-white/70">
                <h1 className="w-full  p-2 text-white font-bold  border-white border-2 gradient-bg">
                  Announcement
                </h1>
                <div className="w-full h-screen"></div>
              </div>
            </div>
          )}
          {activeBtn === "meeting" && (
            <div className="flex-1 ml-6 mr-2 animate-slideUp pt-40">
              <div className="w-full border-2 border-red-600 bg-white/70">
                <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
                  Invertis Meeting
                </h1>
                <div className="bg-white/30 p-3 shadow-lg shadow-black">
                  <div className=" shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                    <div className="text-center py-5 bg-white/50 shadow-[0_0_8px_rgba(0,0,0,0.7)]">
                      <div className="w-full grid grid-cols-[200px_30px_1fr_200px_30px_1fr] gap-x-5 gap-y-3">
                        <p className="font-bold">
                          From Date <b className="text-red-600">*</b>
                        </p>
                        <p>:</p>
                        <span>
                          <input
                            placeholder="DD MMMM YYYY"
                            className="border p-1 border-gray-500 placeholder:text-sm placeholder:text-center placeholder:pl-3"
                          ></input>
                        </span>
                        <p className="font-bold">
                          To Date <b className="text-red-600">*</b>
                        </p>
                        <p>:</p>
                        <span>
                          <input
                            placeholder="DD MMMM YYYY"
                            className="border p-1 border-gray-500 placeholder:text-sm placeholder:text-center placeholder:pl-3"
                          ></input>
                        </span>
                        <p className="font-bold">To Date</p>
                        <p>:</p>
                        <span>
                          <input className="border px-4 py-1 text-sm border-gray-500"></input>
                        </span>
                      </div>

                      <div className="m-6 w-full text-center border border-gray-400 bg-white p-1">
                        <p>There are no record to display.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeBtn === "notifications" && (
            <div className="flex-1 ml-6 mr-2 animate-slideUp pt-40">
              <div className="w-full border-2 border-red-600 bg-white/70">
                <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
                  Invertis Meeting
                </h1>
                <div className="bg-white/30 p-3 shadow-lg shadow-black">
                  <div className=" shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                    <div className="text-center py-5 bg-white/50 shadow-[0_0_8px_rgba(0,0,0,0.7)]">
                      <div className="flex w-full justify-between px-5">
                        <div className="flex items-center gap-3 font-bold ">
                          <p>Show</p>
                          <select className="border border-yellow-500  bg-[linear-gradient(to_right,white_60%,gray_40%)] text-gray-600 rounded px-1">
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>All</option>
                          </select>
                          <p>Rows</p>
                        </div>
                        <input
                          placeholder="Select"
                          className="border border-gray-400 p-1"
                        ></input>
                      </div>
                      <div className="w-full p-5">
                        <table className="border-t-2 border-red-600 w-full text-white border-separate border-spacing-x-0.5 text-left border-l-1 border-l-black">
                          <thead>
                            <tr className="p-1 *:border-spacing-1 *:p-1 ">
                              <td className="bg-[#0671B6]">
                                Announcement Text
                              </td>
                              <td className="bg-[#CF4E33]">From Date</td>
                              <td className="bg-[#CF4E33]">To Date</td>
                              <td className="bg-[#CF4E33]">Academic Year</td>
                            </tr>
                          </thead>
                        </table>
                        <p className="border border-gray-400 bg-white text-left pl-3">
                          No data available in table
                        </p>
                      </div>
                      <div className="w-full p-5">
                        <table className="border-t-2 border-red-600 w-full text-white text-center border-separate border-spacing-x-0.5">
                          <thead>
                            <tr className="*:bg-[#0D628C] p-1 *:border-spacing-1">
                              <td>Announcement Text</td>
                              <td>From Date</td>
                              <td>To Date</td>
                              <td>Academic Year</td>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeSidebar;
