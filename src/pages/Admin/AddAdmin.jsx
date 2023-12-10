import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../../api/api";
import Swal from "sweetalert2";

const AddAdmin = () => {
  const { id } = useParams();
  const [admin, setAdmin] = useState({});
  const [fieldsData, setFieldsData] = useState({});
  const navigate = useNavigate();

  //Village correction form handler
  const handleAdminSubmit = (e) => {
    e.preventDefault();

    // console.log(newData);
    fetch(BASE_URL + `/collection/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fieldsData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Added Successfully",
        });
        navigate("/operator");
      });
  };

  const handleFormValueChange = (e) => {
    const { name, value } = e.target;

    setFieldsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fields = [
    {
      name: "Type",
      type: "text",
      placeHolder: "Type",
    },
    {
      name: "Role",
      type: "text",
      placeHolder: "Role",
    },
    {
      name: "Name",
      type: "text",
      placeHolder: "Name",
    },
    {
      name: "Email",
      type: "email",
      placeHolder: "Email",
    },
    {
      name: "Phone",
      type: "text",
      placeHolder: "Phone",
    },
    {
      name: "Password",
      type: "text",
      placeHolder: "Password",
    },
  ];

  return (
    <div className="min-h-screen pt-10 hero bg-base-200">
      <form
        onSubmit={handleAdminSubmit}
        className="card-body w-[90%] lg:w-1/2 bg-white top-0"
      >
        <h1 className="pb-2 text-2xl font-bold md:text-4xl">Add User</h1>

        {fields.map(({ name, type, placeHolder }) => (
          <div key={name} className="form-control">
            <label className="label">
              <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                {placeHolder}
              </span>
            </label>
            <input
              value={fieldsData[name]}
              onChange={handleFormValueChange}
              type={type}
              name={name}
              placeholder={placeHolder}
              className="p-2 border-b focus-within:outline-none bordered"
              required
            />
          </div>
        ))}
        <label className="label">
          <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
            Status
          </span>
        </label>
        <select
          required
          value={fieldsData["Status"]}
          onChange={handleFormValueChange}
          name="Status"
          type="select"
          className="w-full text-base font-semibold text-gray-500 select border-info"
        >
          <option disabled>Select</option>
          <option value="Active">Active</option>
          <option value="In Active">In Active</option>
        </select>

        <div className="mt-6 form-control">
          <button
            type="submit"
            className="text-white bg-green-500 btn hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAdmin;
