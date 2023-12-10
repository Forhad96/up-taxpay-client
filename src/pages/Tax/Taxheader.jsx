import React from "react";

const TaxHeader = ({ headers }) => {
  return (
    <thead className="bg-green-500">
      <tr role="row" className="row_undefined">
        {headers.map((header) => (
          <th
            key={header}
            width="5%"
            className=" text-white sm:text-[10px] pb- md:text-[14px] font-semibold"
            rowSpan={1}
            colSpan={1}
            aria-label={header}
            style={{ width: 45, fontWeight: "bold" }}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TaxHeader;
