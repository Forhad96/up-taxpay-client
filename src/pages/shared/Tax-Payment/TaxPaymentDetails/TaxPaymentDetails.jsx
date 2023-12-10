
const TaxPaymentDetails = () => {

  const dataArray = [
    { 
      name: "John Doe",
      phone: "123-456-7890",
      tax: "Property Tax",
      taxAmount: "$500",
      paidTaxPeriod: {startMonth:"Jan-Feb",endMonth:'fab,34'},
      submissionDate: "2023-03-15"
    },
    // Add more objects as needed
  ];



  return (
    <div>
      <div className="overflow-x-auto ml-11">
        <table className="table mt-1">
          {/* head */}
          <thead className="bg-green-500 text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Tax</th>
              <th>Tax amount</th>
              <th>Paid Tax Period</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody className="bg-white">

            {
              dataArray?.map((payer,idx) => <tr key={idx}>
                <th>1</th>
                <td>{payer.name}</td>
                <td>{payer.phone}</td>
                <td>{payer.tax}</td>
                <td>{payer.taxAmount}</td>
                <td>{payer.paidTaxPeriod.startMonth} - {payer.paidTaxPeriod.endMonth}</td>
                <td>{payer.submissionDate}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxPaymentDetails;
