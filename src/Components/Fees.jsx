import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

function Fees() {
  return (
    <div className="bg-white/70 w-full mx-2 border-2 border-red-600 pt-40">
      <h1 className="bg-[#0671B6] p-2 text-xl text-white font-bold pl-10 gradient-bg">
        Fees Details
      </h1>
      <div className="flex justify-between mt-3 gap-10 *:text-center m-2">
        <div className="flex-1 ">
          <h1 className="bg-[#08628D] p-2 text-white font-bold">Total Fee</h1>
          <div className="h-80 overflow-y-auto overflow-x-scroll m-2">
            <table className="w-full border-collapse bg-white table-auto **:border **:border-gray-500 **:p-1 text-sm">
              <thead className="sticky top-0">
                <tr className="bg-[#DE495B] text-white">
                  <th>Academic Year</th>
                  <th>Due Date</th>
                  <th>Description</th>
                  <th>Semester/Year</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody className=" *:odd:bg-gray-200">
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>Institute Fee</td>
                  <td>I</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>Examination Fee</td>
                  <td>I</td>
                  <td>5,000.00</td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>Unifrom Fee</td>
                  <td>I</td>
                  <td>5,000.00</td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>Note Book Fee</td>
                  <td>I</td>
                  <td>600.00</td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>Insurance Fee</td>
                  <td>I</td>
                  <td>300.00</td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>GYM CHARGES( MONTHLY)</td>
                  <td>I</td>
                  <td>500.00</td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>Hostel Fee</td>
                  <td>I</td>
                  <td>65,000.00</td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>Institute Fee</td>
                  <td>III</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>Examination Fee</td>
                  <td>III</td>
                  <td>6,000.00</td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>Insurance Fee</td>
                  <td>III</td>
                  <td>300.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="bg-[#08628D] p-2 text-white font-bold">
            Payment Details
          </h1>
          <div className="h-80 overflow-y-auto overflow-x-scroll m-2">
            <table className="w-full border-collapse bg-white table-auto **:border **:border-gray-500 **:p-1 text-md text-sm">
              <thead className="sticky top-0">
                <tr className="bg-[#DE495B] text-white">
                  <th>Academic Year</th>
                  <th>Paid Date</th>
                  <th>Semester/Year</th>
                  <th>Amount</th>
                  <th>Print</th>
                </tr>
              </thead>
              <tbody className=" *:odd:bg-gray-200">
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>I</td>
                  <td>50,000.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>I</td>
                  <td>5,000.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>I</td>
                  <td>5,000.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>I</td>
                  <td>600.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>I</td>
                  <td>300.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>III</td>
                  <td>500.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>III</td>
                  <td>65,000.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>III</td>
                  <td>50,000.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>III</td>
                  <td>6,000.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td>24-25</td>
                  <td>07-Jun-2024</td>
                  <td>III</td>
                  <td>300.00</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-orange-500 border-none"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3 gap-10 *:text-center m-2">
        <div className="flex-1 ">
          <h1 className="bg-[#08628D] p-2 text-white font-bold">Unpaid Fee</h1>
          <div className="h-80 overflow-y-auto overflow-x-scroll m-2 bg-gray-200">
            <table className="w-full border-collapse bg-white table-auto **:border **:border-gray-500 **:p-1"></table>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="bg-[#08628D] p-2 text-white font-bold">
            Other Transactions
          </h1>
          <div className="h-80 overflow-y-auto overflow-x-scroll m-2 bg-gray-200">
            <table className="w-full border-collapse bg-white table-auto **:border **:border-gray-500 **:p-1"></table>
          </div>
        </div>
      </div>
      <footer className="shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] bg-gray-200 p-5 m-3 px-30 shadow-black text-center">
        <b className="font-bold text-red-600 animate-blink">Note: </b>Course fee
        payment cannot be combined with other fee payments. Transaction fee
        charges to be borne by cardholder for any payment Transaction fee
        charges will not be refunded/ reversed under any circumstances for any
        refund/ reversal /chargeback and any other reasons.
      </footer>
    </div>
  );
}
export default Fees;
