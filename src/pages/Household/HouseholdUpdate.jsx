import { TiBackspaceOutline } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useGetData from "../../hooks/useGetData";
import Loading from "../shared/Loading/Loading";
import { modifyData } from "../../api/api";
import Swal from "sweetalert2";
const HouseholdUpdate = () => {
  const { id } = useParams();
  const [client, loading] = useGetData(`/collection/house/${id}`);
  const [villageData] = useGetData("/collection/villages");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = async(data) => {
    try {
      const res = await modifyData(`/collection/house/${id}`,"PUT",data)
      console.log(res);
      if(res.modifiedCount > 0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "সফলভাবে একটি নতুন গৃহস্থ সংশোধন করা হয়েছে!",
          showConfirmButton: false,
          timer: 1500,
        });
      }


    } catch (error) {
      console.log(error);
    }


  };

  const {
    _id,
    upazila,
    union,
    village,
    word,
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
  } = client || {};

  return (
    <div className="border shadow-2xl rounded-md p-5 m-5">
      <div className="flex justify-between px-5 m-3 py-5 bg-sky-400 shadow-sm mb-6">
        <h3 className="card-title d-inline-block">নতুন গৃহস্থ</h3>
        <Link
          to={"/household"}
          className="btn bg-accentClr btn-md text-white text-lg  font-semibold hover:bg-hoverClr"
        >
          <TiBackspaceOutline></TiBackspaceOutline>গৃহস্থ তালিকা
        </Link>
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
                defaultValue={upazila}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">গ্রাম:</span>
              </label>
              <select
                name="village"
                type="select"
                {...register("village")}
                defaultValue={village}
                // value={village}

                className="select font-semibold border-info text-base text-gray-500  w-full"
              >
                <option disabled>{village}</option>
                {villageData?.map((village) => (
                  <option key={village._id}>{village.village}</option>
                ))}
              </select>
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">থানা প্রধানের নাম:</span>
              </label>
              <input
                name="head_of_household_name"
                type="text"
                {...register("head_of_household_name")}
                placeholder="থানা প্রধানের নাম:"
                defaultValue={head_of_household_name}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পিতা/স্বামীর নাম:</span>
              </label>
              <input
                type="text"
                name="father_or_husband_name"
                {...register(`father_or_husband_name`)}
                defaultValue={father_or_husband_name}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">হোল্ডিং নং:</span>
              </label>
              <input
                name="holding_number"
                {...register(`holding_number`)}
                type="text"
                placeholder="হোল্ডিং নং:"
                defaultValue={holding_number}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">বাড়ির জমির পরিমান:</span>
              </label>
              <input
                name="land_size"
                type="text"
                {...register(`land_size`)}
                placeholder=""
                defaultValue={land_size}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের মোট সদস্য সংখ্যা:</span>
              </label>
              <input
                name="total_family_members"
                type="text"
                placeholder=""
                {...register(`total_family_members`)}
                defaultValue={total_family_members}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের অশিক্ষিত সংখ্যা:</span>
              </label>
              <input
                name="uneducated_members"
                type="text"
                {...register(`uneducated_members`)}
                placeholder=""
                defaultValue={uneducated_members}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের মহিলা সংখ্যা:</span>
              </label>
              <input
                name="female_members"
                type="text"
                placeholder=""
                {...register(`female_members`)}
                defaultValue={female_members}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের বেকার সংখ্যা:</span>
              </label>
              <input
                name="unemployed_members"
                type="text"
                placeholder=""
                {...register(`unemployed_members`)}
                defaultValue={unemployed_members}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">১৮ + বৎসর:</span>
              </label>
              <input
                name="age_18_plus"
                type="text"
                placeholder=""
                {...register("age_18_plus")}
                defaultValue={age_18_plus}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
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
                    defaultChecked={
                      house_ownership === "নিজস্ব" && house_ownership
                    }
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
                    defaultChecked={
                      house_ownership === "ভাড়াকৃত" && house_ownership
                    }
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
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ইউনিয়ন:</span>
              </label>
              <input
                name="union"
                type="text"
                {...register("union")}
                placeholder="ইউনিয়ন এর নাম লিখুন:"
                defaultValue={union}
                className="input font-semibold border-info text-base text-gray-500  w-full input-bordered"
                required
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ওয়ার্ড:</span>
              </label>

              <select
                name="word"
                type="select"
                {...register("word")}
                defaultValue={word}
                className="select font-semibold border-info text-base text-gray-500  w-full"
              >
                <option disabled>{word}</option>
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
                defaultValue={head_of_household_mobile}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("national_id")}
                defaultValue={national_id}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                  placeholder=""
                  {...register("occupation")}
                  defaultValue={occupation}
                  className="input font-semibold border-info w-full text-base text-gray-500 input-bordered"
                  required
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
                  defaultValue={religion}
                  className="select font-semibold border-info w-full text-base text-gray-500"
                >
                  <option>{religion}</option>
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
                placeholder=""
                {...register("educated_members")}
                defaultValue={educated_members}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("male_members")}
                defaultValue={male_members}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("employed_members")}
                defaultValue={employed_members}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("age_0_18")}
                defaultValue={age_0_18}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("total_male_voters")}
                defaultValue={total_male_voters}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("freedom_fighters")}
                defaultValue={freedom_fighters}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
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
                    defaultChecked={house_type === "কাঁচা" && house_type}
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
                    defaultChecked={house_type === "পাকা" && house_type}
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
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">মোট মহিলা ভোটার:</span>
              </label>
              <input
                name="total_female_voters"
                type="text"
                placeholder=""
                {...register("total_female_voters")}
                defaultValue={total_female_voters}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের বিধবা সংখ্যা:</span>
              </label>
              <input
                name="widows"
                type="text"
                placeholder=""
                {...register("widows")}
                defaultValue={widows}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের প্রতিবন্ধী সংখ্যা:</span>
              </label>
              <input
                name="disabled_member"
                type="text"
                placeholder=""
                {...register("disabled_members")}
                defaultValue={disabled_members}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("divorcees")}
                defaultValue={divorcees}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("facilities_from_UPO")}
                defaultValue={facilities_from_UPO}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("latrine")}
                defaultValue={latrine}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("cultivated_land_area_without_house")}
                defaultValue={cultivated_land_area_without_house}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                defaultValue={uncultivated_land_area_without_house}
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
                placeholder=""
                {...register("house_value")}
                defaultValue={house_value}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
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
                placeholder=""
                {...register("tax_collected_by_UPO")}
                defaultValue={tax_collected_by_UPO}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">এসেসমেন্ট অনুযায়ী কর:</span>
              </label>
              <input
                name="tax_based_on_assessment"
                type="text"
                placeholder=""
                {...register(tax_based_on_assessment)}
                defaultValue={tax_based_on_assessment}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
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
                    defaultChecked={tube_well === "আছে" && tube_well}
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
                    defaultChecked={tube_well === "নাই" && tube_well}
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
            className="btn  text-white font-bold hover:bg-hoverClr   bg-[#65c50a]"
          />
        </div>
      </form>
    </div>
  );
};

export default HouseholdUpdate;
