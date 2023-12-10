import { useParams } from "react-router";
import useGetData from "../../hooks/useGetData";
import { Link } from "react-router-dom";
import TaxPaymentForm from "../shared/Tax-Payment/TaxPayment";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

const BusinessClientDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const [businessClient] = useGetData(`/collection/business/${id}`);

  console.log(Object.keys(businessClient).join(","));
  const {
    _id,
    upazila,
    union,
    business_type,
    owner_name,
    business_code,
    assesment_tax,
    business_name,
    phone,
    village,
    shop_no,
    word,
    business_capital,
    UP_collected_tax,
  } = businessClient || {};



  // modal
  // open modal
  const handleOpenTaxPay = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  //close modal
  const handleCloseTaxPay = () => {
    setIsOpen(false);
    // console.log(isClose)
  };

  const taxPayerInfo = {
    name: "Mehdi",
    village: "Rangpur",
    phone: "12343434",
  };

  return (
    <div className="card-body">
      <div className="overflow-x-auto">
        <h2 className="bg-green-500 text-white text-xl px-2 py-2 w-full">
          {" "}
          ব্যবসা বিবরন
        </h2>
        <table className="table">
          <tbody>
            <tr className="hover">
              <th>গ্রাম:</th>
              <td>{village}</td>
            </tr>
            <tr className="hover">
              <th>ব্যবসার নাম:</th>
              <td>{business_name}</td>
            </tr>
            <tr className="hover">
              <th>মালিকের নাম:</th>
              <td>{owner_name}</td>
            </tr>
            <tr className="hover">
              <th>মোবাইল:</th>
              <td>{phone}</td>
            </tr>
            <tr className="hover">
              <th>এসেসমেন্ট অনুযায়ী কর:</th>
              <td>{assesment_tax}</td>
            </tr>
            <tr className="hover">
              <th>ইউপি কর্তৃক ধার্য্য কৃত কর:</th>
              <td>{UP_collected_tax}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-5 flex join items-center justify-center">
          <Link onClick={handleOpenTaxPay} className="join-item btn">
            pay
          </Link>
          <Link to={`/businessUpdate/${_id}`} className="join-item btn">
            <AiFillEdit className="text-green-500 text-[18px] md:text-[30px]"></AiFillEdit>
          </Link>
          <Link to="/" className="join-item btn">
            back
          </Link>
        </div>

        <div className={` ${isOpen ? "block" : "hidden"} `}>
          <TaxPaymentForm
            handleCloseTaxPay={handleCloseTaxPay}
            taxPayerInfo={taxPayerInfo}
          ></TaxPaymentForm>
        </div>
      </div>
    </div>
  );
};
export default BusinessClientDetails;


