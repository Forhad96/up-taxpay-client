import { useEffect, useState } from "react";

import HouseholdNav from "./HouseholdNav";
import useGetData from "../../hooks/useGetData";
import HouseholdClients from "./HouseholdClients";
import Loading from "../shared/Loading/Loading";

import Pagination from "../shared/Pagination/Pagination";

const Household = () => {
  const [query, setQuery] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [householdClients, isLoading] =
    useGetData(`/collection/house/`, query) || [];
  useEffect(() => {
    setSearchData(householdClients);
  }, [householdClients]);



  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mx-2">
      <HouseholdNav setQuery={setQuery}></HouseholdNav>
      {/* household clients table */}
      <div className="overflow-x-auto">
        <table className="table table-xs mt-3">
          <thead className="bg-green-400 text-white ">
            <tr>
              <th>ক্রমিক </th>
              <th>উপজেলা </th>
              <th>ইউনিয়ন</th>
              <th>গ্রাম</th>
              <th>ওয়ার্ড</th>
              <th>নাম</th>
              <th>মোবাইল</th>
              <th>হোল্ডিং নং</th>
              <th>বাড়ির মূল্য</th>
              <th>এসেসমেন্ট কর</th>
              <th>ইউপি কর</th>
              <th>একশন</th>
            </tr>
          </thead>
          {searchData?.map((client, idx) => (
            <HouseholdClients
              householdClients={householdClients}
              setSearchData={setSearchData}
              idx={idx}
              client={client}
              key={client._id}
            ></HouseholdClients>
          ))}
        </table>
      </div>

      <Pagination endpoint={'/collection/house'} setData={setSearchData}></Pagination>
    </div>
  );
};

export default Household;
