import { useEffect, useState } from "react";
import getTaxSubmissionDate from "../shared/Tax-Payment/Data/Data";
import pay_tax_icon from "/icons/icons/pay-tax.png";
import { amounts } from "../shared/Tax-Payment/Data/Data";
import { months } from "../shared/Tax-Payment/Data/Data";
import Swal from "sweetalert2";

import { useNavigate, useParams } from "react-router-dom/dist";
import usePutData from "../../hooks/usePutData";
import useGetData from "../../hooks/useGetData";
import BASE_URL from "../../api/api";

const UpdateTax = () => {
  const { id } = useParams();
  const goTo = useNavigate();
  const [data] = useGetData(`/collection/tax/${id}`);

  const [tax, setTax] = useState({
    name: data?.name || "",
    phone: data?.phone || "",
    type: data?.type || "",
    amount: data?.amount || "",
    submissionDate: data?.submissionDate || "",
    startMonth: data?.startMonth || "",
    endMonth: data?.endMonth || "",
  });

  useEffect(() => {
    setTax({
      name: data?.name || "",
      phone: data?.phone || "",
      type: data?.type || "",
      amount: data?.amount || "",
      submissionDate: data?.submissionDate || "",
      startMonth: data?.startMonth || "",
      endMonth: data?.endMonth || "",
    });
  }, [data]);

  // const {res} = usePutData("/collection/tax")

  const handleTaxPayment = (e) => {
    e.preventDefault();

    fetch(BASE_URL + `/collection/tax/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tax),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        goTo("/tax");
      })
      .catch((err) => console.log(err.message));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTax((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="hero min-h-[110vh] fixed -top-20 left-0 right-0 w-full z-40 bg-[#00000049] mt-8">
        <form
          onSubmit={handleTaxPayment}
          className="card-body w-[90%] lg:w-1/2 relative bg-white left-20 top-9"
        >
          <div className=" bg-[#ffffff] border overflow-hidden border-5 rounded-full absolute p-2 -top-8 left-[45%]">
            <img className="" src={pay_tax_icon} alt="" />
          </div>
          <h1 className="text-2xl mt-8 md:text-3xl text-center font-bold pb-2 ">
            কর পরিশোধ
          </h1>
          <div className="1/4 mx-auto space-y-8">
            {/* 1st colum */}
            <div className="flex gap-3 flex-1 justify-between">
              {/* Amount */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                    পরিমাণ
                  </span>
                </label>
                <input
                  type="number"
                  className="w-32 py-1"
                  name="amount"
                  value={tax.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                    টাইপ
                  </span>
                </label>
                <select
                  className="w-32 py-1"
                  value={tax.type}
                  name="type"
                  onChange={handleChange}
                >
                  <option value="household">গৃহস্থ</option>
                  <option value="bussiness">ব্যবসা</option>
                </select>
              </div>
            </div>

            {/* 2cnd column */}
            <div className="flex gap-3">
              {/* Started month */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold mb-1 md:text-[14px] lg:text-[16px]">
                    শুরু মাস নির্বাচন করুন
                  </span>
                </label>
                <select
                  value={data.startMonth}
                  name="startMonth"
                  onChange={handleChange}
                  className="p-1"
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* End Month */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold mb-1 md:text-[14px] lg:text-[16px]">
                    শেষ মাস নির্বাচন করুন
                  </span>
                </label>
                <select
                  value={tax.endMonth}
                  name="endMonth"
                  onChange={handleChange}
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-control">
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#57e557] text-white hover:bg-[#07b107]"
              >
                Save
              </button>
            </div>

            {/* Submission date */}
          </div>

          <div
            // onClick={handleCloseTaxPay}
            className="text-red-600 cursor-pointer font-bold text-2xl absolute right-6 top-5"
          >
            X
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateTax;
