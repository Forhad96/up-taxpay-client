import { Link, useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import TaxPaymentForm from "../shared/Tax-Payment/TaxPayment";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
const HouseholdDetails = () => {
  const { id } = useParams();
  const [client] = useGetData(`/collection/house/${id}`);

  const {
    _id,
    // upazila,
    // union,
    village,
    // word,
    head_of_household_name,
    head_of_household_mobile,
    father_or_husband_name,
    national_id,
    holding_number,
    house_type,
    land_size,
    occupation,
    total_family_members,
    educated_members,
    uneducated_members,
    male_members,
    female_members,
    employed_members,
    unemployed_members,
    age_0_18,
    age_18_plus,
    total_male_voters,
    total_female_voters,
    freedom_fighters,
    widows,
    divorcees,
    disabled_members,
    facilities_from_UPO,
    religion,
    latrine,
    tube_well,
    cultivated_land_area_without_house,
    uncultivated_land_area_without_house,
    house_ownership,
    house_value,
    tax_based_on_assessment,
    tax_collected_by_UPO,
  } = client;



    const [isOpen,setIsOpen] = useState(false)



  // open modal 
  const handleOpenTaxPay = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  //close modal
  const handleCloseTaxPay = () => {
    setIsOpen(false)
    // console.log(isClose)
  }


  const taxPayerInfo = {
    head_of_household_name,
    holding_number,
  }


  return (
    <div className="card-body">
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="hover">
              <th>গ্রাম:</th>
              <td>{village}</td>
            </tr>
            <tr className="hover">
              <th>খানা প্রধানের নাম:</th>
              <td>{head_of_household_name}</td>
            </tr>
            <tr className="hover">
              <th>খানা প্রধানের মোবাইল:</th>
              <td>{head_of_household_mobile}</td>
            </tr>
            <tr className="hover">
              <th>পিতা/স্বামীর নাম:</th>
              <td>{father_or_husband_name}</td>
            </tr>
            <tr className="hover">
              <th>জাতীয় পরিচয়পত্র নং:</th>
              <td>{national_id}</td>
            </tr>
            <tr className="hover">
              <th>হোল্ডিং নং:</th>
              <td>{holding_number}</td>
            </tr>
            <tr className="hover">
              <th>বাড়ির ধরন:</th>
              <td>{house_type}</td>
            </tr>
            <tr className="hover">
              <th>বাড়ির জমির পরিমান:</th>
              <td>{land_size}</td>
            </tr>
            <tr className="hover">
              <th>পেশা:</th>
              <td>{occupation}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের মোট সদস্য সংখ্যা:</th>
              <td>{total_family_members}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের শিক্ষিত সংখ্যা:</th>
              <td>{educated_members}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের অশিক্ষিত সংখ্যা:</th>
              <td>{uneducated_members}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের পুরুষ সংখ্যা:</th>
              <td>{male_members}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের মহিলা সংখ্যা:</th>
              <td>{female_members}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের কর্মজীবী সংখ্যা:</th>
              <td>{employed_members}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের বেকার সংখ্যা:</th>
              <td>{unemployed_members}</td>
            </tr>
            <tr className="hover">
              <th>০-১৮ বৎসর:</th>
              <td>{age_0_18}</td>
            </tr>
            <tr className="hover">
              <th>১৮ + বৎসর:</th>
              <td>{age_18_plus}</td>
            </tr>
            <tr className="hover">
              <th>মোট পুরুষ ভোটার:</th>
              <td>{total_male_voters}</td>
            </tr>
            <tr className="hover">
              <th>মোট মহিলা ভোটার:</th>
              <td>{total_female_voters}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের মুক্তিযোদ্ধা সংখ্যা:</th>
              <td>{freedom_fighters}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের বিধবা সংখ্যা:</th>
              <td>{widows}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের তালাকপ্রাপ্ত সংখ্যা:</th>
              <td>{divorcees}</td>
            </tr>
            <tr className="hover">
              <th>পরিবারের প্রতিবন্ধী সংখ্যা:</th>
              <td>{disabled_members}</td>
            </tr>
            <tr className="hover">
              <th>ইউপি থেকে প্রাপ্ত সুবিধা:</th>
              <td>{facilities_from_UPO}.</td>
            </tr>
            <tr className="hover">
              <th>ধর্ম:</th>
              <td>{religion}</td>
            </tr>
            <tr className="hover">
              <th>ল্যাট্রিন:</th>
              <td>{latrine}</td>
            </tr>
            <tr className="hover">
              <th>নলকূপ:</th>
              <td>{tube_well}</td>
            </tr>
            <tr className="hover">
              <th>আবাদি জমির পরিমান(বাড়ি ভিটা ছাড়া):</th>
              <td>{cultivated_land_area_without_house}</td>
            </tr>
            <tr className="hover">
              <th>অনাবাদি জমির পরিমান(বাড়ি ভিটা ছাড়া):</th>
              <td>{uncultivated_land_area_without_house}</td>
            </tr>
            <tr className="hover">
              <th>বাড়ির মালিকানা:</th>
              <td>{house_ownership}</td>
            </tr>
            <tr className="hover">
              <th>বাড়ির মূল্য:</th>
              <td>{house_value}</td>
            </tr>
            <tr className="hover">
              <th>এসেসমেন্ট অনুযায়ী কর:</th>
              <td>{tax_based_on_assessment}</td>
            </tr>
            <tr className="hover">
              <th>ইউপি কর্তৃক ধার্য্য কৃত কর:</th>
              <td>{tax_collected_by_UPO}</td>
            </tr>
          </tbody>
        </table>
        <div className=" join flex items-center mt-5 gap-5 justify-center">
          <Link onClick={handleOpenTaxPay} className="join-item btn">
            Pay
          </Link>
          <Link to={`/household-update/${_id}`} className="btn join-item">
            <AiFillEdit className="text-green-500 text-[18px] md:text-[30px]"></AiFillEdit>
          </Link>
          <Link to='/' className="join-item btn">back</Link>
        </div>


      <div className={` ${isOpen?'block':'hidden'} `}>
        <TaxPaymentForm
        handleCloseTaxPay={handleCloseTaxPay}
        taxPayerInfo={taxPayerInfo}
        head_of_household_name={head_of_household_name}
        head_of_household_mobile={head_of_household_mobile}
        ></TaxPaymentForm>

      </div>
      </div>
    </div>
  );
};
export default HouseholdDetails;
