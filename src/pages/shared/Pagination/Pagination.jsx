import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import useGetData from "../../../hooks/useGetData";

const Pagination = ({ endpoint, setData }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [allData] = useGetData(endpoint) || [];

  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(allData?.length);
  }, [allData]);

  const [activePage, setActivePage] = useState(0);
  const [data] =
    useGetData(endpoint + `?page=${activePage}&size=${itemsPerPage}`) || [];

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  return (
    <div>
      <div className="flex gap-3 flex-wrap gap-y-8 justify-center items-center py-8">
        <div className="join grid grid-cols-3">
          <button
            onClick={() => activePage > 0 && setActivePage(activePage - 1)}
            className="join-item btn btn-outline"
          >
            Previous page
          </button>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            className="select select-bordered border-gray-800 join-item"
          >
            <option disabled selected>
              Per page
            </option>
            <option>2</option>
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>40</option>
            <option>60</option>
            <option>90</option>
          </select>
          <button
            onClick={() =>
              activePage < pages.length - 1 && setActivePage(activePage + 1)
            }
            className="join-item btn btn-outline"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  endpoint: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Pagination;

// <div className="join flex gap-3">
//   {pages?.map((page) => (
//     <button
//       className={`btn ${
//         activePage === page ? "bg-secondaryClr text-white" : ""
//       }`}
//       key={page}
//       onClick={() => setActivePage(page)}
//     >
//       {page}
//     </button>
//   ))}
// </div>;
