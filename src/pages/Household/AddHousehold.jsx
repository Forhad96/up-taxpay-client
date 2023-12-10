
import { AiOutlineLeft } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../shared/Loading/Loading";
import Swal from "sweetalert2";

import { modifyData } from "../../api/api";
import useGetData from "../../hooks/useGetData";
const AddHousehold = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

const [villageData,isLoading] = useGetData('/collection/villages')

if(isLoading){
  return <Loading></Loading>
}
  const onSubmit = async (data) => {
    try {
      // modifyData is a function to do post/put 
      const res = await modifyData("/collection/house", "POST", data);
      console.log(res.acknowledged);
      if (res.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "সফলভাবে একটি নতুন গৃহস্থ নিবন্ধিত হয়েছে!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };



  return (
    <div className="border rounded-md mt-6">
      <div className="flex justify-between px-5 mb-6">
        <Link
          to={"/household"}
          className=" text-lg flex gap-2 items-center  font-semibold"
        >
          <AiOutlineLeft className="text-cyan-400 text-2xl font-bold"></AiOutlineLeft>
          Go back
        </Link>
        <h3 className="card-title d-inline-block"> <BiSolidUser className="text-cyan-400 text-2xl"></BiSolidUser> নতুন গৃহস্থ</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/*  column */}

          <div className="space-y-4">
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">উপজেলা</span>
              </label>
              <input
                name="upazila"
                type="text"
                {...register("upazila")}
                placeholder="উপজেলার নাম:"
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">গ্রাম:</span>
              </label>
              <select
                name="village"
                type="select"
                {...register("village")}
                defaultValue={"Select"}
                className="select font-semibold border-info text-base text-gray-500  w-full"
              >
                <option disabled>Select</option>
                {villageData?.map((village) => (
                  <option key={village._id}>{village.village}</option>
                ))}
              </select>
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">থানা প্রধানের নাম:</span>
              </label>
              <input
                name="head_of_household_name"
                type="text"
                {...register("head_of_household_name")}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পিতা/স্বামীর নাম:</span>
              </label>
              <input
                type="text"
                name="father_or_husband_name"
                {...register(`father_or_husband_name`)}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">হোল্ডিং নং:</span>
              </label>
              <input
                name="holding_number"
                {...register(`holding_number`)}
                type="text"
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">বাড়ির জমির পরিমান:</span>
              </label>
              <input
                name="land_size"
                type="text"
                {...register(`land_size`)}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের মোট সদস্য সংখ্যা:</span>
              </label>
              <input
                name="total_family_members"
                type="text"
                {...register(`total_family_members`)}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের অশিক্ষিত সংখ্যা:</span>
              </label>
              <input
                name="uneducated_members"
                type="text"
                {...register(`uneducated_members`)}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের মহিলা সংখ্যা:</span>
              </label>
              <input
                name="female_members"
                type="text"
                {...register(`female_members`)}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের বেকার সংখ্যা:</span>
              </label>
              <input
                name="unemployed_members"
                type="text"
                {...register(`unemployed_members`)}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">১৮ + বৎসর:</span>
              </label>
              <input
                name="age_18_plus"
                type="text"
                {...register("age_18_plus")}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="flex items-center">
              <label className="label">
                <span className="font-bold">বাড়ির মালিকানা:</span>
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="house_ownership"
                    {...register(`house_ownership`)}
                    value="নিজস্ব"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <label
                    htmlFor="houseOwnerShip-1"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    নিজস্ব
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="house_ownership"
                    {...register(`house_ownership`)}
                    value="ভাড়াকৃত"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-group-2"
                  />
                  <label
                    htmlFor="houseOwnerShip-2"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    ভাড়াকৃত
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/*  column */}
          <div className="space-y-4">
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ইউনিয়ন:</span>
              </label>
              <input
                name="union"
                type="text"
                {...register("union")}
                placeholder="ইউনিয়ন এর নাম লিখুন:"
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold"> ওয়ার্ড:</span>
              </label>
              <select
                name="word"
                type="select"
                {...register("word")}
                defaultValue={"Select"}
                className="select font-semibold border-info text-base text-gray-500  w-full"
              >
                <option disabled>Select</option>
                {villageData?.map((village) => (
                  <option key={village._id}>{village.word}</option>
                ))}
              </select>
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">খানা প্রধানের মোবাইল: :</span>
              </label>
              <input
                type="text"
                name="head_of_household_mobile"
                {...register("head_of_household_mobile")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">জাতীয় পরিচয়পত্র নং:</span>
              </label>
              <input
                name="national_id"
                type="text"
                {...register("national_id")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="flex gap-3 w-full">
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">পেশা:</span>
                </label>
                <input
                  name="occupation"
                  type="text"
                  {...register("occupation")}
                  className="input font-semibold border-info w-full text-base text-gray-500 input-bordered"
                />
              </div>
              {/* dormo */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">ধর্ম:</span>
                </label>
                <select
                  name="religion"
                  type="select"
                  {...register("religion")}
                  defaultValue={"select"}
                  className="select font-semibold border-info w-full text-base text-gray-500"
                >
                  <option disabled>select</option>
                  <option>ইসলাম ধর্ম</option>
                  <option>হিন্দু ধর্ম</option>
                  <option>অন্যান্য</option>
                </select>
              </div>
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের শিক্ষিত সংখ্যা:</span>
              </label>
              <input
                name="educated_members"
                type="text"
                {...register("educated_members")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের পুরুষ সংখ্যা:</span>
              </label>
              <input
                name="male_members"
                type="text"
                {...register("male_members")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের কর্মজীবী সংখ্যা:</span>
              </label>
              <input
                name="employed_embers"
                type="text"
                {...register("employed_members")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">০-১৮ বৎসর:</span>
              </label>
              <input
                name="age_0_18"
                type="text"
                {...register("age_0_18")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">মোট পুরুষ ভোটার:</span>
              </label>
              <input
                name="total_male_voters"
                type="text"
                {...register("total_male_voters")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">মুক্তিযোদ্ধা সংখ্যা:</span>
              </label>
              <input
                name="freedom_fighter"
                type="text"
                {...register("freedom_fighters")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="flex items-center">
              <label className="label">
                <span className="font-bold">বাড়ির ধরন:</span>
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="house_type"
                    {...register("house_type")}
                    value="কাঁচা"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="house-type-radio-1"
                  />
                  <label
                    htmlFor="house-type-radio-1"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    কাঁচা
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="house_type"
                    {...register("house_type")}
                    value="পাকা"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="house-type-radio-2"
                  />
                  <label
                    htmlFor="house-type-radio-2"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    পাকা
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* column */}
          <div className="space-y-4">
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">মোট মহিলা ভোটার:</span>
              </label>
              <input
                name="total_female_voters"
                type="text"
                {...register("total_female_voters")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের বিধবা সংখ্যা:</span>
              </label>
              <input
                name="widows"
                type="text"
                {...register("widows")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের প্রতিবন্ধী সংখ্যা:</span>
              </label>
              <input
                name="disabled_member"
                type="text"
                {...register("disabled_members")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের তালাকপ্রাপ্ত সংখ্যা:</span>
              </label>
              <input
                name="divorcees"
                type="text"
                {...register("divorcees")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ইউপি থেকে প্রাপ্ত সুবিধা:</span>
              </label>
              <input
                name="facilities_from_UPO"
                type="text"
                {...register("facilities_from_UPO")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ল্যাট্রিন:</span>
              </label>
              <input
                name="latrine"
                type="text"
                {...register("latrine")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">
                  আবাদি জমির পরিমান(বাড়ি ভিটা ছাড়া):
                </span>
              </label>
              <input
                name="cultivated_land_area_without_house"
                type="text"
                {...register("cultivated_land_area_without_house")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">
                  অনাবাদি জমির পরিমান(বাড়ি ভিটা ছাড়া):
                </span>
              </label>
              <input
                name="uncultivated_land_area_without_house"
                type="text"
                placeholder=""
                {...register("uncultivated_land_area_without_house")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">বাড়ির মূল্য:</span>
              </label>
              <input
                name="house_value"
                type="text"
                {...register("house_value")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ইউপি কর্তৃক ধার্য্য কৃত কর:</span>
              </label>
              <input
                name="tax_collected_by_UPO"
                type="text"
                {...register("tax_collected_by_UPO")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">এসেসমেন্ট অনুযায়ী কর:</span>
              </label>
              <input
                name="tax_based_on_assessment"
                type="text"
                {...register("tax_based_on_assessment")}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
              />
            </div>
            {/* row */}
            <div className="flex items-center">
              <label className="label">
                <span className="font-bold">নলকূপ:</span>
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    name="tube_well"
                    type="radio"
                    {...register("tube_well")}
                    value="আছে"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="well-radio-1"
                  />
                  <label
                    htmlFor="well-radio-1"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    আছে
                  </label>
                </div>
                <div className="flex">
                  <input
                    name="well"
                    type="radio"
                    value="নাই"
                    {...register("tube_well")}
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="well-radio-2"
                  />
                  <label
                    htmlFor="well-radio-2"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    নাই
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center ">
          <input
            type="submit"
            className="btn btn-block my-8  text-white font-bold hover:bg-hoverClr   bg-[#65c50a]"
          />
        </div>
      </form>
    </div>
  );
};

export default AddHousehold;
