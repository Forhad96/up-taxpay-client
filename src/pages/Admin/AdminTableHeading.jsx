import React from "react";

const AdminTableHeading = ({ headers }) => {
  return (
    <thead>
      <tr role="row" className="row_undefined">
        {headers?.map((header) => (
          <th
            key={header}
            width="5%"
            className=" sm:text-[14px] pb-4 md:text-[17px] font-bold text-black"
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

export default AdminTableHeading;
