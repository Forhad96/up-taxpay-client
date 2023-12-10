import { useState } from "react";
import Swal from "sweetalert2";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import BASE_URL from "../../api/api";
import { BsEyeFill } from "react-icons/bs";

const TaxRow = ({ data, idx, setAllTax }) => {
  // console.log(data);
  const handleDelete = () => {
    // Delete pop-up
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(BASE_URL + `/collection/tax/${data._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((deleted) => {
            Swal.fire("Deleted!", "Deleted Successfully.", "success");
            setAllTax((prevData) =>
              prevData.filter((prevAdmin) => prevAdmin._id !== data?._id)
            );
          });
      }
    });
  };

  return (
    <tr>
      <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">{idx + 1}</td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.name}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.type}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.amount}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.startMonth}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data.endMonth}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.submissionDate}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.phone}
      </td>

      {/* Navigation */}
      <td className="flex gap-3 px-2 py-1 sm:px-4 sm:py-2 items-center md:px-6 md:py-3">
        <Link to={`/tax-payer/${data?._id}`}>
          <BsEyeFill className="text-[20px] text-black"></BsEyeFill>
        </Link>
        <Link to={`/update-tax/${data?._id}`}>
          <button className="px-1 text-white md:px-3">
            <AiFillEdit className="text-green-500 text-[15px] md:text-2xl"></AiFillEdit>
          </button>
        </Link>
        <button
          onClick={() => handleDelete()}
          className="px-1 text-white md:px-3"
        >
          <AiFillDelete className="text-[#ff5959] text-[15px] md:text-2xl"></AiFillDelete>
        </button>
      </td>
    </tr>
  );
};

export default TaxRow;
