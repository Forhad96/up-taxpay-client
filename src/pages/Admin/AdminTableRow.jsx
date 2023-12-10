import React, { useState } from "react";
import Swal from "sweetalert2";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import BASE_URL from "../../api/api";

const AdminTableRow = ({ data, idx, setAdminsData }) => {
  const { _id } = data;
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
        fetch(BASE_URL + `/collection/users/${data?._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((deleted) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setAdminsData((prevData) =>
              prevData.filter((prevAdmin) => prevAdmin._id !== _id)
            );
          });
      }
    });
  };

  return (
    <tr>
      <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">{idx + 1}</td>
      <td className="px-2 text-[10px] md:text-xl py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.Type}
      </td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">{data.Role}</td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">{data.Name}</td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.Email}
      </td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.Phone}
      </td>
      <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.Status}
      </td>
      <td className="flex gap-3 px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        <Link to={`/edit-admin/${data?._id}`}>
          <button className="px-1 text-white md:px-3">
            <AiFillEdit className="text-green-500 text-[18px] md:text-3xl"></AiFillEdit>
          </button>
        </Link>
        <button
          onClick={() => handleDelete()}
          className="px-1 text-white md:px-3"
        >
          <AiFillDelete className="text-[#ff5959] text-[18px] md:text-3xl"></AiFillDelete>
        </button>
      </td>
    </tr>
  );
};

export default AdminTableRow;
