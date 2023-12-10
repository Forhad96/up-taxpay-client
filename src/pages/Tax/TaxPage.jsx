import PrintButton from "../Village/Print";
import TaxHeader from "./Taxheader";
import TaxRow from "./TaxRow";
import TaxNav from "./TaxNav";
import { useEffect, useRef, useState } from "react";

import Loading from "../shared/Loading/Loading";
import Print from "../shared/Print/Print";
import useGetData from "../../hooks/useGetData";

const TaxPage = () => {
  const [allTax, setAllTax] = useState([]);

  const [taxData, loading] = useGetData("/collection/tax");
  useEffect(() => {
    setAllTax(taxData);
  }, [taxData]);

  const [type, setType] = useState("household");
  const tableref = useRef(null);

  const headers = [
    "Sl. No",
    "Name",
    "Type",
    "Amount",
    "St Month",
    "End Month",
    "Date Payed",
    "phone",
    "Action",
  ];

  return (
    <div className="overflow-x-auto">
      <div className="card-body">
        <div className="table-responsive">
          <TaxNav taxData={taxData} allTax={allTax} setAllTax={setAllTax} />

          <div>
            {/* Village data start here */}
            <table
              ref={tableref}
              className="table table-sm table-bordered no-footer"
            >
              <TaxHeader headers={headers} />

              <tbody>
                {allTax?.map((data, idx) => (
                  <TaxRow
                    data={data}
                    idx={idx}
                    key={idx}
                    setAllTax={setAllTax}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-7">
            <Print tableRef={tableref}></Print>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxPage;
