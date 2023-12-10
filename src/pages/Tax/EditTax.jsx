import { useState } from "react";
import getTaxSubmissionDate from "./Data/Data";
import pay_tax_icon from "../../../../public/icons/icons/pay-tax.png";
import { months } from "./Data/Data";
import { amounts } from "./Data/Data";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom/dist";

const TaxPaymentForm = ({ handleCloseTaxPay, taxPayerInfo }) => {
  const { name, village, phone } = taxPayerInfo;
  // state to store name,date,month
  const [startMonth, setStartMonth] = useState("January");
  const [endMonth, setEndMonth] = useState("March");
  const [amount, setAmount] = useState(100);
  const [type, setType] = useState("Business");
  const submissionDate = getTaxSubmissionDate();

  const goTo = useNavigate();

  // Getting the taxpayer information
  // starting month to pay tax
  const handleStartMonthChange = (event) => {
    setStartMonth(event.target.value);
  };

  // end month in range
  const handleEndMonthChange = (event) => {
    setEndMonth(event.target.value);
  };

  // end month in range
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  // handle tax type
  const handleType = (event) => {
    setType(event.target.value);
  };

  // organizing taxpayer information
  const taxesInfo = {
    name,
    village,
    phone,
    type,
    amount,
    submissionDate,
    monthsRange: {
      startMonth: startMonth.toLowerCase(),
      endMonth: endMonth.toLowerCase(),
    },
  };

  console.log(taxesInfo);

  const handleTaxPayment = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Payment Received",
      text: "Thank you for your tax payment. Your transaction is successful!",
      footer: '<a href="#">Print Payment Confirmation</a>',
    });

    goTo(`/tax-payment-details`);
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
                  onChange={handleAmount}
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
                  onChange={handleType}
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
                  value={startMonth}
                  onChange={handleStartMonthChange}
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
                <select value={endMonth} onChange={handleEndMonthChange}>
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
