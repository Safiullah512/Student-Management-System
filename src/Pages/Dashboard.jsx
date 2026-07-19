import { act, useState } from "react";
import erp1 from "../assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCaretDown, faC } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/bg.jpeg";
import Academic from "../Components/Academic";
import HomeSidebar from "../Components/homeSidebar";
import Fees from "../Components/Fees";
import Application from "../Components/Application";
import Examination from "../Components/Examination";
import Railway from "../Components/Railway";
import Grievance from "../Components/Greivance";
import More from "../Components/more";
import Retotling from "../Components/Retotling";
import Result from "../Components/Result";

function Dashboard() {
  const [showMore, setShowMore] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  function handleMenu(menu) {
    setActiveMenu(activeMenu === menu ? "home" : menu);
  }
  return (
    <nav className="w-full h-screen flex flex-col">
      <div className=" w-full fixed pb-20 z-50 top-0">
        <div className="bg-[#CF4E33] p-2 flex justify-between text-white ">
          <p>Annoucement</p>
          <p>SAFIULLAH SHEKH</p>
        </div>
        <div className="flex justify-between px-8 border-b-2 border-red-600 bg-[#F1F1F1] ">
          <div className="flex justify-around gap-20">
            <img
              src="http://erp.invertisuniversity.ac.in:81/assets/images/ilogo.png"
              className="w-40 h-18 object-cover p-2"
            ></img>
            <div className=" *:w-fit *:h-8 *:bg-[#0671B6] flex  *:px-5  *:rounded-tr-3xl text-white *:cursor-pointer *:text-md *:border-l-2 *:border-red-600 mt-10 *:hover:bg-[#DE495B] *:hover:border-[#0671B6]">
              <button onClick={() => handleMenu("grievance")}>Grievance</button>
              <button onClick={() => handleMenu("railway")}>
                Railway Conc...
              </button>
              <button onClick={() => handleMenu("fees")}>Fees</button>
              <button onClick={() => handleMenu("application")}>
                Application
              </button>
              <button onClick={() => handleMenu("examination")}>
                Examination
              </button>
              <button
                onClick={() => setShowMore(!showMore)}
                className="relative"
              >
                More <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={erp1}
              className="w-15 h-15 object-cover  rounded-full border-4 border-[#DFDFDF] object-top shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            ></img>
            <span>
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </span>
          </div>
        </div>
        <div className="w-full flex bg-white justify-end">
          <div className="flex p-3">
            <h1
              className=" bg-[#0472C0]  rounded-2xl px-3 text-sm text-white cursor-pointer"
              onClick={() => setActiveMenu("home")}
            >
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              My Home Page
            </h1>
          </div>
          {activeMenu === "fees" && (
            <>
              <div className="py-2.5">/</div>
              <div className="flex p-3">
                <h1
                  className=" bg-[#0472C0]  rounded-2xl px-3 text-sm text-white cursor-pointer"
                  onClick={() => setActiveMenu("fees")}
                >
                  Fees
                </h1>
              </div>
            </>
          )}
          {activeMenu === "application" && (
            <>
              <div className="py-2.5">/</div>
              <div className="flex p-3">
                <h1
                  className=" bg-[#0472C0]  rounded-2xl px-3 text-sm text-white cursor-pointer"
                  onClick={() => setActiveMenu("application")}
                >
                  Application Status
                </h1>
              </div>
            </>
          )}
          {activeMenu === "examination" && (
            <>
              <div className="py-2.5">/</div>
              <div className="flex p-3">
                <h1
                  className=" bg-[#0472C0]  rounded-2xl px-3 text-sm text-white cursor-pointer"
                  onClick={() => setActiveMenu("examination")}
                >
                  Examination
                </h1>
              </div>
            </>
          )}
          {activeMenu === "railway" && (
            <>
              <div className="py-2.5">/</div>
              <div className="flex p-3">
                <h1
                  className=" bg-[#0472C0]  rounded-2xl px-3 text-sm text-white cursor-pointer"
                  onClick={() => setActiveMenu("railway")}
                >
                  Railway Concession Form
                </h1>
              </div>
            </>
          )}
          {activeMenu === "grievance" && (
            <>
              <div className="py-2.5">/</div>
              <div className="flex p-3">
                <h1
                  className=" bg-[#0472C0]  rounded-2xl px-3 text-sm text-white cursor-pointer"
                  onClick={() => setActiveMenu("grievance")}
                >
                  Grievance
                </h1>
              </div>
            </>
          )}
          {activeMenu === "form" && (
            <>
              <div className="py-2.5">/</div>
              <div className="flex p-3">
                <h1
                  className=" bg-[#0472C0]  rounded-2xl px-3 text-sm text-white cursor-pointer"
                  onClick={() => setActiveMenu("form")}
                >
                  Revalution/Re-Totling
                </h1>
              </div>
            </>
          )}
          {activeMenu === "result" && (
            <>
              <div className="py-2.5">/</div>
              <div className="flex p-3">
                <h1
                  className=" bg-[#0472C0]  rounded-2xl px-3 text-sm text-white cursor-pointer"
                  onClick={() => setActiveMenu("result")}
                >
                  Result
                </h1>
              </div>
            </>
          )}
        </div>
        {showMore && (
          <More setShowMore={setShowMore} setActiveMenu={setActiveMenu}></More>
        )}
      </div>
      <div>
        <div
          className="flex flex-1 min-h-screen top-20 -z-10"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center 150px",
          }}
        >
          {activeMenu === "home" && <HomeSidebar></HomeSidebar>}
          {activeMenu === "fees" && <Fees></Fees>}
          {activeMenu === "application" && <Application></Application>}
          {activeMenu === "examination" && <Examination></Examination>}
          {activeMenu === "railway" && <Railway></Railway>}
          {activeMenu === "grievance" && <Grievance></Grievance>}
          {activeMenu === "form" && <Retotling></Retotling>}
          {activeMenu === "result" && <Result></Result>}
        </div>
        <div className="flex">
          {activeMenu === "home" ? (
            <footer className="bg-gray-700 text-white p-3 text-center w-full text-sm">
              ©2021 Invertis University, Invertis Village,Bareilly-Lucknow
              National Highway, NH-24, Bareilly-243123, Uttar Pradesh.
            </footer>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
export default Dashboard;
