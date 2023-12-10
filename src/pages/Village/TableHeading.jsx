const TableHeading = () => {
  return (

      <thead className="bg-green-500">
        <tr role="row" className="row_undefined">
          <th
            width="5%"
            className=" sm:text-[14px] pb-4 md:text-[17px]  font-bold text-white"
            rowSpan={1}
            colSpan={1}
            aria-label="ক্রমিক"
            style={{ width: 45, fontWeight: "bold" }}>
            ক্রমিক
          </th>
          <th
            className=" sm:text-[14px] pb-4 md:text-[17px]  font-bold text-white"
            tabIndex={0}
            aria-controls="data_table"
            rowSpan={1}
            colSpan={1}
            aria-label="নাম: activate to sort column ascending"
            style={{ width: 493 }}>
            নাম
          </th>
          <th
            className=" sm:text-[14px] pb-4 md:text-[17px ] font-bold text-white"
            tabIndex={0}
            aria-controls="data_table"
            rowSpan={1}
            colSpan={1}
            aria-label="ওয়ার্ড: activate to sort column ascending"
            style={{ width: 138 }}>
            ওয়ার্ড
          </th>
          <th
            className=" sm:text-[14px] pb-4 md:text-[17px]  font-bold text-white"
            tabIndex={0}
            aria-controls="data_table"
            rowSpan={1}
            colSpan={1}
            aria-label="মন্তব্য: activate to sort column ascending"
            style={{ width: 140 }}>
            মন্তব্য
          </th>
          <th
            width="13%"
            className=" sm:text-[14px] pb-4 md:text-[17px] font-bold text-white"
            rowSpan={1}
            colSpan={1}
            aria-label="একশন"
            style={{ width: 123 }}>
            একশন
          </th>
        </tr>
      </thead>
  );
};

export default TableHeading;
