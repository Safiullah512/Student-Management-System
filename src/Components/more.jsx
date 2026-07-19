import { useState } from "react";
import Retotling from "./Retotling";
function More({ setShowMore, setActiveMenu }) {
  function openPage(page) {
    setActiveMenu(page);
    setShowMore(false);
  }
  return (
    <div>
      <div className="w-fit  mt-32  ml-60 absolute z-100   bg-[#F1F1F1] -top-4 border-t-2 border-orange-500 p-2 rounded pl-5 pr-30">
        <div className=" w-fit flex justify-between gap-5  ">
          <button
            className="pl-4 pr-50 p-2 hover:bg-[#DD3873]   cursor-pointer hover:text-white rounded"
            onClick={() => openPage("form")}
          >
            Revalution/Re-Totling
          </button>
          <button
            className="pl-4 pr-50 p-2 hover:bg-[#DD3873] cursor-pointer hover:text-white rounded"
            onClick={() => openPage("result")}
          >
            Result
          </button>
        </div>
      </div>
    </div>
  );
}
export default More;
