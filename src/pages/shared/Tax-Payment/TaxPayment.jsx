import { useState } from "react";
import getTaxSubmissionDate from "./Data/Data";
import pay_tax_icon from "../../../../public/icons/icons/pay-tax.png";
import { months } from "./Data/Data";
import { amounts } from "./Data/Data";

import { useNavigate } from "react-router-dom/dist";
import BASE_URL, { modifyData } from "../../../api/api";

const TaxPaymentForm = ({
  handleCloseTaxPay,
  head_of_household_name,
  head_of_household_mobile,
}) => {
  // const {name,phone} = taxPayerInfo;
  // state to store name,date,month

  const [startMonth, setStartMonth] = useState("january");
  const [endMonth, setEndMonth] = useState("march");
  const [amount, setAmount] = useState(100);
  const [type, setType] = useState("household");
  const [year, setYear] = useState(2023);
  const submissionDate = getTaxSubmissionDate();

  const goTo = useNavigate();

  // Years list 2023 to 2040
  const years = Array.from({ length: 18 }, (_, index) => 2023 + index);

  const handleTaxPayment = async (e) => {
    e.preventDefault();

    // organizing taxpayer information to create backend obj
    const taxesInfo = {
      name: head_of_household_name,
      phone: head_of_household_mobile,
      type,
      amount,
      submissionDate,
      startMonth,
      endMonth,
    };
    console.log(JSON.stringify(taxesInfo));
    // try {
    //   const res = await modifyData("/collection/payTax","POST",taxesInfo);
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }

    fetch(BASE_URL + "/collection/tax", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taxesInfo),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })

      .then((data) => console.log(data));
    goTo("/household");
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
                <select
                  className="w-32 py-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                >
                  {amounts.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                    টাইপ
                  </span>
                </label>
                <select
                  className="w-32 py-1"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="household">গৃহস্থ</option>
                  <option value="business">ব্যবসা</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text block  font-bold mb-1 md:text-[14px] lg:text-[16px]">
                  Year
                </span>
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="p-1"
              >
                {years.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
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
                  value={startMonth}
                  onChange={(e) => setStartMonth(e.target.value)}
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
                  value={endMonth}
                  onChange={(e) => setEndMonth(e.target.value)}
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
            onClick={handleCloseTaxPay}
            className="text-red-600 cursor-pointer font-bold text-2xl absolute right-6 top-5"
          >
            X
          </div>
        </form>
      </div>
    </>
  );
};

export default TaxPaymentForm;
