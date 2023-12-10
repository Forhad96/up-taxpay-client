import { TiPlus, TiBackspaceOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const NewClients = () => {
  return (
    <div className="">
      <div className="flex justify-between px-5 m-3 py-5 bg-sky-400 shadow-sm mb-6">
        <h3 className="card-title d-inline-block">নতুন গৃহস্থ</h3>
        <Link
          to={"/household"}
          className="btn bg-accentClr btn-md text-white text-lg  font-semibold hover:bg-hoverClr"
        >
          <TiBackspaceOutline></TiBackspaceOutline>গৃহস্থ তালিকা
        </Link>
      </div>
      <form>
        <div className="grid mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/*  column */}
          <div className="space-y-4">
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">গ্রাম:</span>
              </label>
              <select
                name="village"
                type="select"
                className="select font-semibold border-info text-base text-gray-500  w-full"
              >
                <option disabled selected>
                  গবিন্দপুর
                </option>
                <option>Java</option>
                <option>Go</option>
              </select>
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">থানা প্রধানের নাম:</span>
              </label>
              <input
                name="thanaName"
                type="text"
                placeholder=""
                defaultValue={"মোছা: আয়শা বেগম"}
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
                name="fatherSpouseName"
                type="text"
                placeholder=""
                defaultValue={"মোছা: আয়শা বেগম"}
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
                name="holdingNumber"
                type="text"
                placeholder=""
                defaultValue={"32900"}
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
                name="landAmount"
                type="text"
                placeholder=""
                defaultValue={"5"}
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
                name="totalFamilyMembers"
                type="text"
                placeholder=""
                defaultValue={"5"}
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
                name="illiterateMembers"
                type="text"
                placeholder=""
                defaultValue={"5"}
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
                name="femaleMembers"
                type="text"
                placeholder=""
                defaultValue={"5"}
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
                name="unemployedMembers"
                type="text"
                placeholder=""
                defaultValue={"5"}
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
                name="eighteenPlusMembers"
                type="text"
                placeholder=""
                defaultValue={"5"}
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
                    name="ownership"
                    value="own"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    defaultChecked=""
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
                    name="ownership"
                    value="rented"
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
                <span className="font-bold">ওয়ার্ড:</span>
              </label>
              <input
                name="word"
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 w-full input-bordered"
                required
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">খানা প্রধানের মোবাইল: :</span>
              </label>
              <input
                name="headMobile"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="nationalId"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                  defaultValue={"কৃষি"}
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
                  className="select font-semibold border-info w-full text-base text-gray-500"
                >
                  <option disabled selected>
                    ইসলাম ধর্ম
                  </option>
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
                name="educatedMembers"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="maleMembers"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="employedMembers"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="zeroToEighteenYears"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="totalMaleVoters"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="freedomFighterCount"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                    name="houseType"
                    value="kacha"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="house-type-radio-1"
                    defaultChecked=""
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
                    name="houseType"
                    value="paka"
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
                name="totalFemaleVoters"
                type="text"
                placeholder=""
                defaultValue={"5"}
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
                name="widowCount"
                type="text"
                placeholder=""
                defaultValue={"5"}
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
                name="disabledCount"
                type="text"
                placeholder=""
                defaultValue={"5"}
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
                name="divorcedCount"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="benefitsFromUP"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                defaultValue={"012568973"}
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
                name="landArea"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="houseValue"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="taxByUP"
                type="text"
                placeholder=""
                defaultValue={"012568973"}
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
                name="assessmentTax"
                type="text"
                placeholder=""
                defaultValue={"500"}
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
                    name="well"
                    type="radio"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="well-radio-1"
                    defaultChecked=""
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
            className="btn  text-white font-bold hover:bg-hoverClr w-full  bg-[#65c50a]"
          />
        </div>
      </form>
    </div>
  );
};
export default NewClients;
