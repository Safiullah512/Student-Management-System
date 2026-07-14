import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/profile.jpeg";
import sign from "../assets/sign.jpeg";
function Examination() {
  const [examination, seExamination] = useState("exam");
  function changeMenu(menu) {
    seExamination(examination === menu ? "form" : menu);
  }
  return (
    <div className="w-full flex h-screen">
      <div className=" w-fit text-md flex flex-col  *:px-8 *:py-2   *:border-b *:border-r *:border-r-red-500 *:border-l *:border-l-red-500  *:hover:bg-[#C32A30] *:cursor-pointer *:hover:text-white *:text-left ">
        <button className="gradient-bg1 text-white font-bold">
          Examination
        </button>
        <button
          onClick={() => changeMenu("exam")}
          className={`${examination === "status" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Examination Form
        </button>
        <button
          onClick={() => changeMenu("carryover")}
          className={`${examination === "status" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Carryover Form
        </button>
        <button
          onClick={() => changeMenu("special")}
          className={`${examination === "placement" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Special Carryover <br /> Form
        </button>
        <button
          onClick={() => changeMenu("admit")}
          className={`${examination === "events" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Admit Card
        </button>
        <button
          onClick={() => changeMenu("internal")}
          className={`${examination === "notice" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Internal Date Sheet
        </button>
        <button
          onClick={() => changeMenu("external")}
          className={`${examination === "meeting" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          External Date Sheet
        </button>
        <button
          onClick={() => changeMenu("specialCarry")}
          className={`${examination === "meeting" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Special Carryover <br /> Date Sheet
        </button>
        <button
          onClick={() => changeMenu("carryoverdate")}
          className={`${examination === "meeting" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Carryover Date <br /> Sheet
        </button>
      </div>
      {examination === "exam" && (
        <div className="flex-1 ml-6 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/80">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Program Transfer Status
            </h1>
            <div className="bg-white/30 p-5 shadow-lg shadow-black">
              <div className="bg-white/70 p-10 shadow-[0_0_10px_rgba(0,0,0,0.7)] font-bold">
                The Examination Form is yet to be Opened.............
              </div>
            </div>
          </div>
        </div>
      )}
      {examination === "carryover" && (
        <div className="flex-1 ml-6 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/70">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Program Transfer Status
            </h1>
            <div className="bg-white/30 p-5 shadow-lg shadow-black">
              <div className="bg-white/70 p-10 shadow-[0_0_10px_rgba(0,0,0,0.7)] font-bold">
                The RE-Examination(Carryover) Form is yet to be
                Opened.............
              </div>
            </div>
          </div>
        </div>
      )}
      {examination === "special" && (
        <div className="flex-1 ml-6 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/70">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Program Transfer Status
            </h1>
            <div className="bg-white/30 p-5 shadow-lg shadow-black">
              <div className="bg-white/70 p-10 shadow-[0_0_10px_rgba(0,0,0,0.7)] font-bold">
                The Special Carryover Exam Form is yet to be Opened.............
              </div>
            </div>
          </div>
        </div>
      )}
      {examination === "admit" && (
        <div className="flex-1 ml-6 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/70">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Program Transfer Status
            </h1>
            <div className="bg-white/30 p-5 shadow-lg shadow-black">
              <div className="bg-white/70 p-5 px-10 shadow-[0_0_10px_rgba(0,0,0,0.7)] font-bold">
                <div>
                  <div className="flex justify-between">
                    <div className="text-sm">
                      Type :{" "}
                      <span>
                        <select className="border text-sm bg-white p-1 ml-5">
                          <option>Main</option>
                          <option>Carryover</option>
                          <option> Special Carryover</option>
                        </select>
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faPrint}
                        className="text-orange-500 text-2xl"
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="flex justify-between mt-10 items-center">
                    <img
                      src="http://erp.invertisuniversity.ac.in:81/assets/images/ilogo.png"
                      className="w-50 h-23 object-cover p-2"
                    ></img>
                    <p className="text-center text-lg text-gray-700">
                      Bareilly-Lucknow National Highway <br />
                      NH-24, Bareilly 243123, Uttar Pradesh
                    </p>
                  </div>
                  <div className="text-center p-2 text-xl border-l-3 border-red-600 border-b-3 bg-[#CCCCCC] uppercase">
                    Admit card even semester examination session : 2025-26
                  </div>
                  <div className="p-1 border mt-3 text-gray-700 text-sm">
                    []
                    <div className="flex justify-between items-center mx-5">
                      <div className="grid grid-cols-[200px_20px_1fr]">
                        <h1>Name of Examination</h1>
                        <p>:</p>
                        <p>Bachelor of Computer Application</p>
                        <h1>Program-Semester</h1>
                        <p>:</p>
                        <p>IV Semester</p>
                        <p>Program Code</p>
                        <p>:</p>
                        <p>BCA-001</p>
                        <p>Enrollment No.</p>
                        <p>:</p>
                        <p>241350</p>
                        <p>Student ID</p>
                        <p>:</p>
                        <p>BC2024174</p>
                        <p>Roll No.</p>
                        <p>:</p>
                        <p>2410201628</p>
                        <p>Name of Student</p>
                        <p>:</p>
                        <p>Shafiq Shekh</p>
                        <p>Father's Name</p>
                        <p>:</p>
                        <p>Sami Shekh</p>
                        <p>Mother's Name</p>
                        <p>:</p>
                        <p>Kaneeze Fatima</p>
                        <p>Examination Center</p>
                        <p>:</p>
                        <p>Invertis University</p>
                      </div>
                      <div className="mr-40">
                        <img
                          src={profile}
                          className="w-25 h-30 object-cover border-2"
                        ></img>
                      </div>
                    </div>
                    <p className="text-center">
                      You are permitted to appear in the following Courses(s):
                    </p>
                    <div className="w-full px-5 text-center mt-5">
                      <table className="w-full">
                        <thead className="*:border bg-[#0D628C] text-white border-t-2 border-red-500">
                          <tr className="*:p-1 *:border text-center">
                            <td>S.No</td>
                            <td>Code</td>
                            <td>Course</td>
                            <td>Category</td>
                            <td>Date</td>
                            <td>Shift</td>
                            <td>From Time</td>
                            <td>To Time</td>
                          </tr>
                        </thead>
                        <tbody className="*:even:bg-[#F2DEDE] *:bg-white">
                          <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm">
                            <td>1</td>
                            <td>BCA401</td>
                            <td>Software Engineering</td>
                            <td>Theory</td>
                            <td>14 May 2026</td>
                            <td>Evening</td>
                            <td>01:30 PM</td>
                            <td>04:30 PM</td>
                          </tr>
                          <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                            <td>2</td>
                            <td>BCA402</td>
                            <td>Gui using .net framwork</td>
                            <td>Theory</td>
                            <td>16 May 2026</td>
                            <td>Evening</td>
                            <td>01:30 PM</td>
                            <td>04:30 PM</td>
                          </tr>
                          <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                            <td>3</td>
                            <td>BCA403</td>
                            <td>Cloud computing</td>
                            <td>Theory</td>
                            <td>19 May 2026</td>
                            <td>Evening</td>
                            <td>01:30 PM</td>
                            <td>04:30 PM</td>
                          </tr>
                          <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                            <td>4</td>
                            <td>BCA404</td>
                            <td>responsive web design-front end development</td>
                            <td>Theory</td>
                            <td>21 May 2026</td>
                            <td>Evening</td>
                            <td>01:30 PM</td>
                            <td>04:30 PM</td>
                          </tr>
                          <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                            <td>5</td>
                            <td>BCA404</td>
                            <td>Discrete Structures</td>
                            <td>Theory</td>
                            <td>23 May 2026</td>
                            <td>Evening</td>
                            <td>01:30 PM</td>
                            <td>04:30 PM</td>
                          </tr>
                          <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                            <td>6</td>
                            <td>BCA452</td>
                            <td>Discrete Structures</td>
                            <td>Practical</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                            <td>6</td>
                            <td>BCA452</td>
                            <td>
                              responsive web design-front end development lab
                            </td>
                            <td>Practical</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <b>Note 1: </b>Practical/Viva/Lab exam will be conducted
                      as per Practical/Viva/Lab date sheet.
                    </p>
                    <div className="flex justify-end mr-30 mt-10">
                      <img src={sign} className="w-30 h-40"></img>
                    </div>
                    <p>
                      <b>Date :</b>13-07-2026
                    </p>
                    <div className="flex justify-end mr-20 ">
                      <p>Registration Evalution/COE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Examination;
