import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPrint,
  faCaretDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/profile.jpeg";
import sign from "../assets/sign.jpeg";

function Result() {
  const [result, setResult] = useState("result");
  const [showResult, setShowResult] = useState(false);
  const [type, setType] = useState("");
  const [academic, setAcademic] = useState("");
  const [semester, setSemester] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleView() {
    if (!type || !academic || !semester) {
      alert("Please select all fields");
      return;
    }
    setShowResult(true);
  }
  return (
    <div>
      {result === "result" && (
        <div className="flex-1  mx-5  pt-40 animate-slideUp relative">
          <div className="w-full border-2 border-red-600 bg-white/50 mb-10">
            <h1 className="w-full p-2 text-white font-bold  border-white border gradient-bg shadow-sm shadow-black">
              Internal Exam Date Sheet
            </h1>
            <div className="bg-white/85 p-5   text-sm pb-15">
              <div className=" flex gap-15">
                <div className="flex gap-12">
                  <div className="font-bold">Type</div>
                  <p>:</p>
                  <div>
                    <select
                      className="p-1 px-6 pl-3 border-gray-600 border *:hover:bg-blue-500 *:hover:text-white bg-white"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="">Select Type</option>
                      <option value="Main">Main</option>
                      <option value="Re-Appear">Re-Appear</option>
                      <option value="Special">Special</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-12">
                  <div className="font-bold">Academic Year</div>
                  <p>:</p>
                  <div>
                    <select
                      className="p-1 px-6 pl-3 border-gray-600 border *:hover:bg-blue-500 *:hover:text-white bg-white"
                      value={academic}
                      onChange={(e) => setAcademic(e.target.value)}
                    >
                      <option value="">Select Academic Year</option>
                      <option value="26-27">26-27</option>
                      <option value="25-26">25-26</option>
                      <option value="24-25">24-25</option>
                      <option value="23-24">23-24</option>
                      <option value="22-23">22-23</option>
                      <option value="21-22">21-22</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-12">
                  <div className="font-bold">Semester / Year</div>
                  <p>:</p>
                  <div>
                    <select
                      className="p-1 px-6 pl-3 border-gray-600 border *:hover:bg-blue-500 *:hover:text-white bg-white"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                    >
                      <option value="">Select Semester</option>
                      <option value="I">I</option>
                      <option value="II">II</option>
                      <option value="III">III</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div
                    className="w-20 text-white view-bg pt-2 px-3 rounded-4xl shadow-sm shadow-black hover:bg-amber-400 cursor-pointer"
                    onClick={handleView}
                  >
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    <button className=" text-white">View</button>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 text-2xl"
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
              {showResult &&
                type === "Main" &&
                academic === "25-26" &&
                semester === "III" && (
                  <div>
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
                    <div className="text-center p-2 text-xl border-l-3 border-red-600 border-b-3 bg-[#CCCCCC] uppercase font-bold">
                      Main Result
                    </div>
                    <div className="p-1 border mt-3  text-sm">
                      []
                      <div className="flex justify-between items-center mx-5">
                        <div className="grid grid-cols-[200px_20px_1fr] [&>:nth-child(3n+1)]:font-bold">
                          <h1>Institute Name</h1>
                          <p>:</p>
                          <p>FOCA</p>
                          <h1>Program Name</h1>
                          <p>:</p>
                          <p className="uppercase">
                            Bachelor of computer applications
                          </p>
                          <p>Program Code</p>
                          <p>:</p>
                          <p>BCA-001</p>
                          <p>Student ID</p>
                          <p>:</p>
                          <p>BC2024174</p>
                          <p>Name of Student</p>
                          <p>:</p>
                          <p>Shafiq Shekh</p>
                          <p>Mother's Name</p>
                          <p>:</p>
                          <p>Fatima Al Zehra</p>
                          <p>Percentage</p>
                          <p>:</p>
                          <p>68.91</p>
                        </div>
                        <div className="grid grid-cols-[200px_20px_1fr] [&>:nth-child(3n+1)]:font-bold">
                          {" "}
                          <p>Enrollment No</p>
                          <p>:</p>
                          <p>25146</p>
                          <p>Roll No</p>
                          <p>:</p>
                          <p>25478965423</p>
                          <p>Father's Name</p>
                          <p>:</p>
                          <p>Sami Shekh</p>
                          <p>Gende</p>
                          <p>:</p>
                          <p>Male</p>
                        </div>
                        <div className="mr-40">
                          <img
                            src={profile}
                            className="w-25 h-30 object-cover border-2"
                          ></img>
                        </div>
                      </div>
                      <div className="w-full px-5 text-center mt-3">
                        <table className="w-full">
                          <thead className="*:border bg-[#0D628C] text-white border-t-2 border-red-500">
                            <tr className="*:p-1 *:border text-center">
                              <td>Code</td>
                              <td>Course</td>
                              <td>Int OB</td>
                              <td>Int Total</td>
                              <td>Ext OB</td>
                              <td>Ext Total</td>
                              <td>Total OB</td>
                              <td>Total Mark</td>
                            </tr>
                          </thead>
                          <tbody className="*:even:bg-[#F2DEDE] *:bg-white">
                            <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm">
                              <td>BCA401</td>
                              <td>DATABASE MANAGEMENT SYSTEMS</td>
                              <td>27</td>
                              <td>30</td>
                              <td>35</td>
                              <td>70</td>
                              <td>62</td>
                              <td>100</td>
                            </tr>
                            <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                              <td>BCA402</td>
                              <td>DATA STRUCTURES</td>
                              <td>27</td>
                              <td>30</td>
                              <td>46</td>
                              <td>70</td>
                              <td>73</td>
                              <td>100</td>
                            </tr>
                            <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                              <td>BCA403</td>
                              <td>DATA COMMUNICATION AND COMPUTER NETWORKS</td>
                              <td>44</td>
                              <td>50</td>
                              <td>34</td>
                              <td>100</td>
                              <td>78</td>
                              <td>150</td>
                            </tr>
                            <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                              <td>BCA304</td>
                              <td>MANAGEMENT INFORMATION SYSTEM</td>
                              <td>14</td>
                              <td>15</td>
                              <td>27</td>
                              <td>35</td>
                              <td>41</td>
                              <td>50</td>
                            </tr>
                            <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                              <td>BCA315</td>
                              <td>NUMERICAL AND STATISTICAL TECHNIQUES </td>
                              <td>13</td>
                              <td>15</td>
                              <td>22</td>
                              <td>35</td>
                              <td>35</td>
                              <td>50</td>
                            </tr>
                            <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                              <td>BCA351</td>
                              <td>DATABASE MANAGEMENT SYSTEMS LAB </td>
                              <td>14</td>
                              <td>15</td>
                              <td>33</td>
                              <td>35</td>
                              <td>47</td>
                              <td>50</td>
                            </tr>
                            <tr className="*:p-1 *:border *:border-gray-400 uppercase text-sm ">
                              <td>BCA452</td>
                              <td>DATA STRUCTURES LAB </td>
                              <td>13</td>
                              <td>15</td>
                              <td>30</td>
                              <td>35</td>
                              <td>43</td>
                              <td>50</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="flex justify-between m-5">
                        <div className="flex flex-col">
                          <p className="font-bold">Session</p>
                          <p>25-26</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-bold">Program-Semester</p>
                          <p>III Semester</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-bold">TotalObt/Max</p>
                          <p>379/550</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-bold">Status</p>
                          <p>Pass</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-bold">COP</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
          {showButton && (
            <button
              className="absolute top-245 right-5 bg-gray-500 hover:bg-[#CF4E33] rounded-full p-4 px-4 text-white"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FontAwesomeIcon
                icon={faArrowUp}
                className="font-bold"
              ></FontAwesomeIcon>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
export default Result;
