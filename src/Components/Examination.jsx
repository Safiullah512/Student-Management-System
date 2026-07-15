import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faPrint, faEye, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/profile.jpeg";
import sign from "../assets/sign.jpeg";

function Examination() {
  const [examination, seExamination] = useState("exam");
  function changeMenu(menu) {
    seExamination(examination === menu ? "exam" : menu);
  }
  return (
    <div className="w-full flex h-screen pt-40">
      <div className=" w-fit text-md flex flex-col  *:px-8 *:py-2   *:border-b *:border-r *:border-r-red-500 *:border-l *:border-l-red-500  *:hover:bg-[#C32A30] *:cursor-pointer *:hover:text-white *:text-left fixed ">
        <button className="gradient-bg1 text-white font-bold">
          Examination
        </button>
        <button
          onClick={() => changeMenu("exam")}
          className={`${examination === "exam" ? "bg-blue-600 text-white" : "bg-white/80 cursor-pointer"}`}
        >
          Examination Form
        </button>
        <button
          onClick={() => changeMenu("carryover")}
          className={`${examination === "carryover" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Carryover Form
        </button>
        <button
          onClick={() => changeMenu("special")}
          className={`${examination === "special" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Special Carryover <br /> Form
        </button>
        <button
          onClick={() => changeMenu("admit")}
          className={`${examination === "admit" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Admit Card
        </button>
        <button
          onClick={() => changeMenu("internal")}
          className={`${examination === "internal" ? "bg-blue-600 text-white" : "bg-white/80"}`}
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
          className={`${examination === "specialCarry" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Special Carryover <br /> Date Sheet
        </button>
        <button
          onClick={() => changeMenu("carryoverDate")}
          className={`${examination === "carryoverDate" ? "bg-blue-600 text-white" : "bg-white/80"}`}
        >
          Carryover Date <br /> Sheet
        </button>
      </div>
      {examination === "exam" && (
        <div className="flex-1 ml-60 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/80">
            <h1 className="w-full p-2 text-white font-bold  border-white border-2 gradient-bg">
              Examination Form
            </h1>
            <div className="bg-white/30 p-5 shadow-lg shadow-black">
              <div className="bg-white/70 p-10 shadow-[0_0_10px_rgba(0,0,0,0.7)] font-bold">
                The Examination Form is not yet to be Opened.............
              </div>
            </div>
          </div>
        </div>
      )}
      {examination === "carryover" && (
        <div className="flex-1 ml-60 mr-2 animate-slideUp">
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
        <div className="flex-1 ml-60 mr-2 animate-slideUp">
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
        <div className="flex-1 ml-60 mr-2 animate-slideUp">
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
      {examination === "internal" && (
        <div className="flex-1 ml-60 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/50">
            <h1 className="w-full p-2 text-white font-bold  border-white border gradient-bg shadow-sm shadow-black">
              Internal Exam Date Sheet
            </h1>
            <div className="bg-white/5 p-5  flex gap-15">
              {" "}
              <div className="font-bold">
                Exam Method<b className="text-red-500 text-xs">*</b>
              </div>
              <p>:</p>
              <div>
                <select className="p-1 px-8 border-gray-600 border *:hover:bg-blue-500 *:hover:text-white bg-white">
                  <option>Select</option>
                  <option>Unit Test 1</option>
                  <option>Unit Test 2</option>
                </select>
              </div>
              <div className="font-bold">
                Semester / Year<b className="text-red-500 text-xs"></b>
              </div>
              <p>:</p>
              <div>
                <select className="p-1 px-8 border-gray-600 border *:hover:bg-blue-500 *:hover:text-white bg-white">
                  <option>Select</option>
                  <option>Unit Test 1</option>
                  <option>Unit Test 2</option>
                </select>
              </div>
              <div className="text-white view-bg p-1 px-3 rounded-4xl shadow-sm shadow-black hover:bg-amber-400 cursor-pointer">
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                <button className=" text-white">View</button>
              </div>
            </div>
            <h1 className="bg-white p-2 m-5 text-sm border border-gray-600 mb-10">
              There are no record to display
            </h1>
          </div>
        </div>
      )}
      {examination === "specialCarry" && (
        <div className="flex-1 ml-60 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/50">
            <h1 className="w-full p-2 text-white font-bold  border-white border gradient-bg shadow-sm shadow-black">
              Special Carryover Date Sheet
            </h1>
            <div className="bg-white/5 p-5  flex gap-15">
              <div className="font-bold ">
                Semester / Year<b className="text-red-500 text-xs">*</b>
              </div>
              <p>:</p>
              <div>
                <select className="p-1 pl-3 px-8 border-gray-600 border *:hover:bg-blue-500 *:hover:text-white bg-white *:text-bla">
                  <option>Select</option>
                  <option>Unit Test 1</option>
                  <option>Unit Test 2</option>
                </select>
              </div>
              <div className="text-white view-bg p-1 px-3 rounded-4xl shadow-sm shadow-black hover:bg-amber-400 cursor-pointer">
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                <button className=" text-white">View</button>
              </div>
            </div>
            <h1 className="bg-white p-2 m-5 text-sm border border-gray-600 mb-10">
              There are no record to display
            </h1>
          </div>
        </div>
      )}
      {examination === "carryoverDate" && (
        <div className="flex-1 ml-60 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/50">
            <h1 className="w-full p-2 text-white font-bold  border-white border gradient-bg shadow-sm shadow-black">
              Carry Over Date Sheet
            </h1>
            <div className="bg-white/5 p-5  flex gap-15">
              <div className="font-bold ">
                Semester / Year<b className="text-red-500 text-xs">*</b>
              </div>
              <p>:</p>
              <div>
                <select className="p-1 pl-3 pr-50 border-gray-600 border *:hover:bg-blue-500 *:hover:text-white bg-white *:text-black *:text-left ">
                  <option>Select</option>
                  <option>I</option>
                  <option>II</option>
                  <option>III</option>
                  <option>IV</option>
                </select>
              </div>
              <div className="text-white view-bg p-1 px-3 rounded-4xl shadow-sm shadow-black hover:bg-amber-400 cursor-pointer">
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                <button className=" text-white">View</button>
              </div>
            </div>
            <h1 className="bg-white p-2 m-5 text-sm border border-gray-600 mb-10">
              There are no record to display
            </h1>
          </div>
        </div>
      )}
      {examination === "external" && (
        <div className="flex-1 ml-60 mr-2 animate-slideUp">
          <div className="w-full border-2 border-red-600 bg-white/50">
            <h1 className="w-full p-2 text-white font-bold  border-white border gradient-bg shadow-sm shadow-black">
              External Exam Date Sheet
            </h1>
            <div className="bg-white/5 p-5  flex gap-15">
              <div className="font-bold ">
                Semester / Year<b className="text-red-500 text-xs">*</b>
              </div>
              <p>:</p>
              <div>
                <select className="p-1 pl-3 pr-50 border-gray-600 border *:hover:bg-blue-500 *:hover:text-white bg-white *:text-black *:text-left ">
                  <option>Select</option>
                  <option>I</option>
                  <option>II</option>
                  <option>III</option>
                  <option>IV</option>
                </select>
              </div>
              <div className="text-white view-bg p-2 px-4 rounded-4xl shadow-sm shadow-black hover:bg-amber-400 cursor-pointer text-sm">
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                <button className=" text-white">View</button>
              </div>
              <div className="text-white view-bg1 p-1 px-6 rounded-4xl shadow-sm shadow-black hover:bg-amber-400 cursor-pointer ">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="mr-2"
                ></FontAwesomeIcon>
                <button className=" text-white">Export</button>
              </div>
            </div>
            <div className="m-6 bg-white">
              <table className="w-full border-t-2 border-red-600">
                <thead className="*:border bg-[#0D628C] text-sm text-white *:p-2 ">
                  <th>Sr.No</th>
                  <th>Code</th>
                  <th>Course Name</th>
                  <th>Semester / Year</th>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Shift</th>
                  <th>Time</th>
                  <th>Academic Block</th>
                  <th>Room/Seat No.</th>
                </thead>
                <tbody className="*:odd:bg-gray-200">
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>1</td>
                    <td>BCA101</td>
                    <td>Environment & Ecology</td>
                    <td>I</td>
                    <td>24 Nov 2025</td>
                    <td>Monday</td>
                    <td>Evening</td>
                    <td>01:30 PM- 04:30 PM</td>
                    <td>BLOCK-3</td>
                    <td></td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>2</td>
                    <td>BCA301</td>
                    <td>DATABASE MANAGEMENT SYSTEMS</td>
                    <td>III</td>
                    <td>24 Nov 2025</td>
                    <td>Monday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td>41(123)</td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>3</td>
                    <td>BCA501</td>
                    <td>DATA WAREHOUSING & DATA MINING</td>
                    <td>V</td>
                    <td>24 Nov 2025</td>
                    <td>Tuesday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td></td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>4</td>
                    <td>BCA102</td>
                    <td>DIGITAL ELECTRONICS AND COMPUTER ORGANIZATION</td>
                    <td>I</td>
                    <td>26 Nov 2025</td>
                    <td>Wednesday</td>
                    <td>Evening</td>
                    <td>01:30 PM - 04:30 PM</td>
                    <td>BLOCK-3</td>
                    <td></td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>5</td>
                    <td>BCA302</td>
                    <td>DATA STRUCTURES</td>
                    <td>III</td>
                    <td>26 Nov 2025</td>
                    <td>Wednesday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td>41(123)</td>
                  </tr>{" "}
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>2</td>
                    <td>BCA301</td>
                    <td>DATABASE MANAGEMENT SYSTEMS</td>
                    <td>III</td>
                    <td>24 Nov 2025</td>
                    <td>Monday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td>41(123)</td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>3</td>
                    <td>BCA501</td>
                    <td>DATA WAREHOUSING & DATA MINING</td>
                    <td>V</td>
                    <td>24 Nov 2025</td>
                    <td>Tuesday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td></td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>4</td>
                    <td>BCA102</td>
                    <td>DIGITAL ELECTRONICS AND COMPUTER ORGANIZATION</td>
                    <td>I</td>
                    <td>26 Nov 2025</td>
                    <td>Wednesday</td>
                    <td>Evening</td>
                    <td>01:30 PM - 04:30 PM</td>
                    <td>BLOCK-3</td>
                    <td></td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>5</td>
                    <td>BCA302</td>
                    <td>DATA STRUCTURES</td>
                    <td>III</td>
                    <td>26 Nov 2025</td>
                    <td>Wednesday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td>41(123)</td>
                  </tr>{" "}
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>2</td>
                    <td>BCA301</td>
                    <td>DATABASE MANAGEMENT SYSTEMS</td>
                    <td>III</td>
                    <td>24 Nov 2025</td>
                    <td>Monday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td>41(123)</td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>3</td>
                    <td>BCA501</td>
                    <td>DATA WAREHOUSING & DATA MINING</td>
                    <td>V</td>
                    <td>24 Nov 2025</td>
                    <td>Tuesday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td></td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>4</td>
                    <td>BCA102</td>
                    <td>DIGITAL ELECTRONICS AND COMPUTER ORGANIZATION</td>
                    <td>I</td>
                    <td>26 Nov 2025</td>
                    <td>Wednesday</td>
                    <td>Evening</td>
                    <td>01:30 PM - 04:30 PM</td>
                    <td>BLOCK-3</td>
                    <td></td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>5</td>
                    <td>BCA302</td>
                    <td>DATA STRUCTURES</td>
                    <td>III</td>
                    <td>26 Nov 2025</td>
                    <td>Wednesday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td>41(123)</td>
                  </tr>{" "}
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>2</td>
                    <td>BCA301</td>
                    <td>DATABASE MANAGEMENT SYSTEMS</td>
                    <td>III</td>
                    <td>24 Nov 2025</td>
                    <td>Monday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td>41(123)</td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>3</td>
                    <td>BCA501</td>
                    <td>DATA WAREHOUSING & DATA MINING</td>
                    <td>V</td>
                    <td>24 Nov 2025</td>
                    <td>Tuesday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td></td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>4</td>
                    <td>BCA102</td>
                    <td>DIGITAL ELECTRONICS AND COMPUTER ORGANIZATION</td>
                    <td>I</td>
                    <td>26 Nov 2025</td>
                    <td>Wednesday</td>
                    <td>Evening</td>
                    <td>01:30 PM - 04:30 PM</td>
                    <td>BLOCK-3</td>
                    <td></td>
                  </tr>
                  <tr className="text-sm *:border *:border-gray-500 *:p-2 text-center">
                    <td>5</td>
                    <td>BCA302</td>
                    <td>DATA STRUCTURES</td>
                    <td>III</td>
                    <td>26 Nov 2025</td>
                    <td>Wednesday</td>
                    <td>Morning</td>
                    <td>09:30 AM - 12:30 PM</td>
                    <td>BLOCK-3</td>
                    <td>41(123)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Examination;
