function HomeSidebar() {
  return (
    <div className=" w-fit text-md flex flex-col  *:px-8 *:py-3  *:bg-white/80 *:border-b *:border-r *:border-r-red-500 *:border-l *:border-l-red-500 ml-2 *:hover:bg-[#C32A30] *:cursor-pointer *:hover:text-white overflow-y-auto pt-41">
      <button className="gradient-bg1 font-extrabold text-white border-2! border-white!">
        Home
      </button>
      <button className="border border-red-500">Notifications</button>
      <button>Announcement</button>
      <button>Events</button>
      <button>
        Circular-Notice<br></br>/Announcement
      </button>
      <button>Meeting View</button>
    </div>
  );
}

export default HomeSidebar;
