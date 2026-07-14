import { useState } from "react";

function Academic() {
  return (
    <div>
      <div className=" w-fit text-md flex flex-col  *:px-8 *:py-3  *:bg-white/80 *:border-b *:border-r *:border-r-red-500 *:border-l *:border-l-red-500 ml-2 *:hover:bg-[#C32A30] *:cursor-pointer *:hover:text-white">
        <button className="bg-gradient-to-l from-red-600 to-blue-600 animate-slide">
          Addmission
        </button>
        <button>Notifications</button>
        <button>Announcement</button>
        <button>Events</button>
        <button>
          Circular-Notice<br></br>/Announcement
        </button>
        <button>Meeting View</button>
      </div>
    </div>
  );
}
export default Academic;
