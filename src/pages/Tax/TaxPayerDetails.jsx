import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";

const TaxPayerDetails = () => {
  const {id}  = useParams()
  const [taxDetails] = useGetData(`/collection/tax/${id}`)
  console.log(taxDetails);
  return (
    <div className="overflow-x-auto m-3">
      <table className="table">
        {/* head */}
        <thead className="bg-green-500 text-center text-white">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Year</th>
            <th>Month Range</th>
            <th>Amount</th>
            {/* <th>Total Amount</th> */}
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Row for name and phone */}
          <tr>
            <th>{taxDetails?.name}</th>
            <td>{taxDetails?.phone}</td>
            <td>{taxDetails?.type}</td>
            <td>year</td>
            <td>{taxDetails?.startMonth} To {taxDetails?.endMonth}</td>
            <td>{taxDetails?.amount}</td>
            {/* <td>total amount</td> */}
            <td>{taxDetails?.submissionDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaxPayerDetails;
