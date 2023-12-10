import "./business.css";

import BusinessSearch from "./BusinessSearch";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import Loading from "../shared/Loading/Loading";
import { AiFillDelete, AiFillEdit, AiOutlineMenu } from "react-icons/ai";
import Swal from "sweetalert2";
import { modifyData } from "../../api/api";

const Business = () => {
  // this state for search value
  const [query, setQuery] = useState(null);
  // this state for store data 
  const [searchData, setSearchData] = useState([]);
  // get data form api using hook
  const [businessClients,isLoading] = useGetData("/collection/business", query);
  useEffect(() => {
    setSearchData(businessClients);
  }, [businessClients]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const staticHeaders = [
    { label: "ক্রমিক" },
    { label: "উপজেলা" },
    { label: "ইউনিয়ন" },
    { label: "গ্রাম" },
    { label: "ওয়ার্ড" },
    { label: "ব্যবসার নাম" },
    { label: "মালিকের নাম" },
    { label: "মোবাইল" },
    { label: "দোকান নং" },
    { label: "এসেসমেন্ট কর" },
    { label: "ইউপি কর" },
    { label: "একশন" },
  ];

  const handleBusinessDelete = async (id)=>{
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
            const res = await modifyData(`/collection/business/${id}`, "DELETE");
            if (res.deletedCount > 0) {
              const remaining = businessClients?.filter(
                (item) => item._id !== id
              );
              setSearchData(remaining);
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

  }

  return (
    <div className="responsive-table mx-2 ">
      <BusinessSearch setQuery={setQuery}></BusinessSearch>

      <div className="">
        <table className="table mt-3">
          {/* head */}
          <thead className="bg-green-400 text-white">
            <tr>
              {staticHeaders?.map((header, idx) => (
                <th key={idx} className="font-bold text-[14px]">{header.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {searchData?.map((content, idx) => (
              <tr key={idx}>
                <th className="font-bold">{idx + 1}</th>
                <td>{content.upazila}</td>
                <td>{content.union}</td>
                <td>{content.village}</td>
                <td>{content.word}</td>
                <td>{content.business_name}</td>
                <td>{content.owner_name}</td>
                <td>{content.phone}</td>
                <td>{content.shop_no}</td>
                <td>{content.assesment_tax}</td>
                <td>{content.UP_collected_tax}</td>
                <td className="flex join">
                  <Link
                    to={`/businessClientsDetails/${content._id}`}
                  >
                    <button className=" join-item btn">
                      <AiOutlineMenu className="text-green-500 text-[18px] md:text-[30px]"></AiOutlineMenu>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleBusinessDelete(content._id)}
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
  );
};

export default Business;
