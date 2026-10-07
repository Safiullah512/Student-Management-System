import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UploadCloud, File, FolderPlusIcon, Clipboard } from "lucide-react";
import { ThemeContext } from "../Components/Context/ThemeContext";
import { useContext, useState } from "react";
import { useRef } from "react";
import { UserContext } from "../Components/Context/UserContext";
import {
  faBuilding,
  faCalendar,
  faCalendarDay,
  faClipboard,
  faCloudUpload,
  faCloudUploadAlt,
  faComment,
  faFile,
  faFileAlt,
  faFileArrowUp,
  faFilePdf,
  faGraduationCap,
  faLandmark,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons/faClipboardUser";
function Mob_Grievance() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  const { user } = useContext(UserContext);

  const [remarks, setRemarks] = useState("");

  const fileRef = useRef(null);

  const [file, setFile] = useState("");

  const [submit, setSubmit] = useState(false);

  function handleFile(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }
  return (
    <div className="w-full h-auto pt-42 overflow-hidden p-3 mb-10 ">
      <div className="relative z-100">
        {submit && (
          <div className="w-full flex justify-center items-center absolute">
            <p className="w-80  bg-green-500 text-white font-bold text-center p-2 rounded animate-slideDown">
              File has been Submitted
            </p>
            <button
              className="absolute right-10 top-1 text-sm text-white font-bold cursor-pointer"
              onClick={() => setSubmit(false)}
            >
              X
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-start items-center p-2 shadow-[0_0_4px_rgba(0,0,0,0.6)] gap-3 rounded-xl ">
        {/* <FontAwesomeIcon
          icon={faClipboard}
          className="text-2xl bg-blue-600 text-white p-2 rounded-xl"
        ></FontAwesomeIcon> */}
        <Clipboard className="w-9 h-8 text-blue-500"></Clipboard>
        <div className="flex flex-col">
          <div className="font-bold">Submit Grievance</div>
          <div className="text-xs">
            Fill the form below to register your grievance
          </div>
        </div>
      </div>
      <div className="w-full p-3 shadow-[0_0_4px_rgba(0,0,0,0.6)]  rounded-xl mt-3 [&_svg]:text-blue-600 pb-10">
        <div className="grid grid-cols-2 gap-x-7 gap-y-3">
          <div className="flex flex-col gap-2">
            <div>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Name
            </div>
            <input
              placeholder="Enter the name"
              className="border p-1 border-gray-400 rounded w-40 placeholder:text-sm bg-[#F9FAFC]"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <FontAwesomeIcon icon={faClipboardUser}></FontAwesomeIcon> Student
              ID
            </div>
            <input
              placeholder="Enter the Student ID"
              className="border p-1 border-gray-400 rounded w-40 placeholder:text-sm bg-[#F9FAFC]"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> Program
            </div>
            <input
              placeholder="SARFARAZ KHAN"
              className="border p-1 border-gray-400 rounded w-40 placeholder:text-sm bg-[#F9FAFC]"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> Semester /
              Year
            </div>
            <input
              placeholder="SARFARAZ KHAN"
              className="border p-1 border-gray-400 rounded w-40 placeholder:text-sm bg-[#F9FAFC]"
            ></input>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 mt-2">
          <div>
            <FontAwesomeIcon icon={faLandmark}></FontAwesomeIcon> Department
          </div>
          <select className="border p-2 border-gray-400 rounded w-full text-sm">
            <option>Select Department</option>
            <option>Bachelor of Computer Application</option>
            <option>Bachelor of Arts</option>
            <option>Bachelor of Commerce</option>
            <option>Bachelor of Science in Computer Science</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-2 mt-2">
          <div>
            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> Remarks
          </div>
          <div className="relative">
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Enter your remarks (optional)"
              maxLength={200}
              className="border p-2 rounded border-gray-400 pb-20 w-full"
            ></textarea>
            <span className="absolute bottom-4 text-xs right-4">
              {remarks.length}/200
            </span>
          </div>
        </div>
        <div className="w-full mt-2">
          <div>
            <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon> File Upload
          </div>
          <div className="w-full flex justify-center items-center border border-dashed border-gray-300 p-3 flex-col mt-1 rounded gap-1 bg-[#F9FAFC]">
            <FontAwesomeIcon
              icon={faCloudUploadAlt}
              className="text-4xl text-blue-500"
            ></FontAwesomeIcon>
            <h1 className="font-bold">Upload File</h1>
            <p className="text-sm">PDF,JPG,PNG(Max.5MB)</p>
            <button
              className="text-blue-500 flex border-2 border-gray-400 px-15 rounded p-1 mt-2 gap-2"
              type="button"
              onClick={() => fileRef.current.click()}
            >
              <FolderPlusIcon className="w-5 h-5 text-blue-500"></FolderPlusIcon>
              <p>{file ? file.name : "Choose File"}</p>
              <input
                ref={fileRef}
                type="file"
                className="hidden"
                onChange={handleFile}
              ></input>
            </button>
          </div>
          <p className="text-orange-600 mt-3 text-sm">
            <b>Note:</b> File should not be more than 5MB.
          </p>
          <button
            className="w-full flex justify-center items-center gap-2 text-sm mt-4 bg-green-600 p-2 rounded text-white font-bold"
            onClick={() => setSubmit(true)}
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-white!"
            ></FontAwesomeIcon>
            <p>Submit Grievance</p>
          </button>
        </div>
        <button onClick={toggleTheme} className="mt-3">
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
        <p className="mt-7">Name :{user.name}</p>
        <p className="mt-3">Course :{user.course}</p>
      </div>
    </div>
  );
}
export default Mob_Grievance;
