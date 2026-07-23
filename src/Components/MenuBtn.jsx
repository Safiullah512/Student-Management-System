import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function MenuBtn({
  handleMenu,
  showMore,
  setShowMore,
  handleClose,
  setShowBtn,
  showBtn,
}) {
  return (
    <>
      <div className="lg:hidden">
        <div className="w-full  min-h-screen  flex flex-col   *:px-5  *:rounded gap-10   *:cursor-pointer *:text-lg   absolute z-500 right-1 top-0  p-1 bg-white  mr-10 *:text-left *:pl-20">
          <div className="flex justify-between">
            <img
              src="http://erp.invertisuniversity.ac.in:81/assets/images/ilogo.png"
              className="w-42 h-20 object-cover p-2  lg:hidden -ml-5"
            ></img>
            <button
              className="w-fit h-auto text-3xl rounded-full "
              onClick={() => setShowBtn(false)}
            >
              X
            </button>
          </div>
          <button onClick={() => handleMenu("grievance")}>Grievance</button>
          <button onClick={() => handleMenu("railway")}>Railway Conc...</button>
          <button onClick={() => handleMenu("fees")}>Fees</button>
          <button onClick={() => handleMenu("application")}>Application</button>
          <button onClick={() => handleMenu("examination")}>Examination</button>
          <button onClick={() => setShowMore(!showMore)} className="relative">
            More <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </>
  );
}
export default MenuBtn;
