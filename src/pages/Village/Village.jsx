import Swal from "sweetalert2";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import TableHeading from "./TableHeading";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import useGetData from "../../hooks/useGetData";
import { modifyData } from "../../api/api";
import Loading from "../shared/Loading/Loading";
import Pagination from "../shared/Pagination/Pagination";
import Print from "../shared/Print/Print";
import { AdminContext } from "../../provider/AdminProvider";

// import { useState } from "react";
const Village = () => {
  // ref for the table
  const tableRef = useRef(null);
  const {user} = useContext(AdminContext)
  const [villageData, setVillageData] = useState([]);
  const [villages, isLoading] = useGetData("/collection/villages") || [];
  useEffect(() => {
    setVillageData(villages);
  }, [villages]);
  
  if (isLoading) {
    return <Loading></Loading>;
  }

  //   handling delete event here
  const handleDelete = async (id) => {
    // Delete pop-up
    try {
      const result = await Swal.fire({
        title: "আপনি কি নিশ্চিত?",
        text: "আপনি এই পরিবর্তনটি আর ফিরিয়ে নিতে পারবেন না!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "হ্যা, ঠিক আছে!",
        cancelButtonText: "না",
      });

      if (result.isConfirmed) {
        const res = await modifyData(`/collection/villages/${id}`, "DELETE");
        if (res.deletedCount > 0) {
          const remaining = villageData?.filter((item) => item._id !== id);
          setVillageData(remaining);
          Swal.fire({
            title: "সফলভাবে মুছে ফেলা হয়েছে!!",
            text: "আপনার ফাইলটি মুছে ফেলা হয়েছে।",
            icon: "success",
            confirmButtonText: "ঠিক আছে",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="overflow-x-auto">
      <div className="card-body">
      <div className="join my-5 flex items-center justify-center">
        <Link className='btn join-item' to="/main-dashboard/addNew-village">
         New village
          <AiFillPlusSquare className=" text-xl"></AiFillPlusSquare>
        </Link>
        <div className="join-item">

          <Print tableRef={tableRef}></Print>
        </div>
      </div>
        <div className="table-responsive">
          <div>
            {/* Village data start here */}
            <table
              ref={tableRef}
              className="table table-sm table-bordered no-footer"
            >
              <TableHeading></TableHeading>
              <tbody>
                {villageData?.map((village, idx) => (
                  <tr key={idx}>
                    <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
                      {idx + 1}
                    </td>
                    <td className="px-2 text-[10px] md:text-xl py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
                      {village.village}
                    </td>
                    <td className="px-2 py-1  sm:px-4 sm:py-2 md:px-6 md:py-3">
                      {village.word}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
                      {village.comment}
                    </td>
                    <td className="join flex px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
                      <Link
                        to={`/edit-village/${village?._id}`}
                        className=" join-item btn"
                      >
                        <AiFillEdit className="text-green-500 text-[18px] md:text-[30px]"></AiFillEdit>
                      </Link>

                      <button
                        onClick={() => handleDelete(village?._id)}
                        className=" join-item btn"
                      >
                        <AiFillDelete className="text-primaryClr text-[18px] md:text-[27px]"></AiFillDelete>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        endpoint={"/collection/villages"}
        setData={setVillageData}
      ></Pagination>
    </div>
  );
};

export default Village;
