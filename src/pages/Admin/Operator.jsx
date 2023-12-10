import Swal from "sweetalert2";
import PrintButton from "../Village/Print";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import AdminTableHeading from "./AdminTableHeading";
import AdminTableRow from "./AdminTableRow";
import BASE_URL from "../../api/api";
import { useEffect, useRef, useState } from "react";
import { TiPlus } from "react-icons/ti";
import useGetData from "../../hooks/useGetData";
import Loading from "../shared/Loading/Loading";
import Print from "../shared/Print/Print";
// import { useState } from "react";
const Operator = () => {
  const adminData = [
    {
      Type: "superadmin",
      Role: "",
      Name: "Admin",
      Email: "admin@gmail.com",
      Phone: "01343425433",
      Status: "Active",
    },
  ];

  const [adminsData, setAdminsData] = useState([]);
  const tableref = useRef(null);
  const [users, isLoading] = useGetData("/collection/users");

  useEffect(() => {
    setAdminsData(users);
  }, [users]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  // useEffect(() => {
  //   fetch(BASE_URL + "/collection/users")
  //     .then((res) => res.json())
  //     .then((data) => setAdminsData(data));
  // }, []);

  const headers = [
    "SL. No.",
    "Type",
    "Role",
    "Name",
    "Email",
    "Phone",
    "Status",
    "Action",
  ];

  return (
    <div className="overflow-x-auto">
      <div className="card-body" ref={tableref}>
        <div className="table-responsive">
          <Link
            to="/add-admin"
            className="mb-6 text-white bg-green-400 border-none outline-none btn btn-sm focus-within:outline-none hover:bg-green-500"
          >
            <TiPlus></TiPlus>
            Add Admin
          </Link>
          <div>
            {/* Village data start here */}
            <table className="table table-sm table-bordered no-footer">
              <AdminTableHeading headers={headers} />
              <tbody>
                {adminsData?.map((data, idx) => (
                  <AdminTableRow
                    data={data}
                    idx={idx}
                    key={idx}
                    setAdminsData={setAdminsData}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Print tableRef={tableref}></Print>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operator;
