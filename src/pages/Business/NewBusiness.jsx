import { useState } from "react";
import Swal from "sweetalert2";
import { BiSolidBusiness } from "react-icons/bi";
import { useNavigate } from "react-router-dom/dist";
import { modifyData } from "../../api/api";
import useGetData from "../../hooks/useGetData";

const NewBusiness = () => {
  const [villages] = useGetData('/collection/villages') || []


  const goTo = useNavigate();


  const handleNewBusiness = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formInputs = Object.fromEntries(formData);

    console.log(Object.keys(formInputs).join(','));
    // post data to database
   try {
     // modifyData is a function to do post/put
     const res = await modifyData("/collection/business", "POST",formInputs);
     console.log(res.acknowledged);
     if (res.acknowledged) {
       // Showing success message
       Swal.fire({
         position: "top-end",
         icon: "success",
         title: "সফলভাবে একটি নতুন ব্যবসা নিবন্ধিত হয়েছে!",
         showConfirmButton: false,
         timer: 1500,
       });
       // Reset the form after submission
       e.target.reset();
     }
   } catch (error) {
     console.log(error);
   }




  };

  return (
    <>
      <div className="hero">
        <form
          onSubmit={handleNewBusiness}
          className="card-body w-[100%] bg-white"
        >
          <h1 className="text-2xl mt-8 md:text-3xl text-center flex items-center justify-center gap-3 font-bold pb-2 ">
            <BiSolidBusiness className=" text-6xl text-cyan-400"></BiSolidBusiness>
            নতুন ব্যবসা
          </h1>

          <div className="w-5/6 mx-auto space-y-8">
            {/* first colum */}
            <div className="flex gap-3 flex-1 justify-between">
              {/* vilage */}

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                    গ্রাম:
                  </span>
                </label>
                <select
                  className="select select-bordered"
                  type="select"
                  defaultValue={"Select"}
                  name="village"
                >
                  <option disabled>Select</option>
                  {villages?.map((village) => (
                    <option key={village._id}>{village.village}</option>
                  ))}
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                    ওয়ার্ড:
                  </span>
                </label>
                <select
                  className="select select-bordered"
                  name="word"
                  defaultValue={'Select'}
                >
                  <option disabled>Select</option>
                  {villages?.map((village) => (
                    <option key={village._id}>{village.word}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                    উপজেলা
                  </span>
                </label>
                <input
                  type="text"
                  className="border-2  p-2 rounded-lg mb-1"
                  name="upazila"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                    ইউনিয়ন
                  </span>
                </label>
                <input
                  type="text"
                  className="border-2  p-2 rounded-lg mb-1"
                  name="union"
                />
              </div>
            </div>
            {/* second column */}
            <div className="flex gap-5 flex-1 justify-between ">
              <div className="flex-1 justify-between">
                {/* ব্যবসার ধরণ */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      ব্যবসার ধরণ
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2  p-2 rounded-lg mb-1"
                    name="businessType"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      মালিকের নাম:
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2  p-2 rounded-lg mb-1"
                    name="owner_name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      ব্যবসা কোড:
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2  p-2 rounded-lg mb-1"
                    name="business_code"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      এসেসমেন্ট কর:
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2  p-2 rounded-lg mb-1"
                    name="assesment_tax"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      অবকাঠামোঃ
                    </span>
                  </label>

                  <div className="flex gap-x-6">
                    <div className="flex">
                      <input
                        type="radio"
                        name="infrastructure"
                        value="কাঁচা"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                      <label
                        htmlFor="infrastructure-1"
                        className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                      >
                        কাঁচা
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        name="infrastructure"
                        value="পাকা"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-group-2"
                      />
                      <label
                        htmlFor="infrastructure-2"
                        className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                      >
                        পাকা
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        name="infrastructure"
                        value="আধা পাকা"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-group-2"
                      />
                      <label
                        htmlFor="infrastructure-3"
                        className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                      >
                        আধা পাকা
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 justify-between">
                {/*ব্যবসার নাম: */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      ব্যবসার নাম:
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2  p-2 rounded-lg mb-1"
                    name="business_name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      মোবাইল:
                    </span>
                  </label>
                  <input
                    type="tel"
                    className="border-2  p-2 rounded-lg mb-1"
                    name="phone"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      দোকান নং:
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2  p-2 rounded-lg mb-1"
                    name="shop_no"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      ব্যবসার মূলধন:
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2  p-2 rounded-lg mb-1"
                    name="business_capital"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-5 md:text-[14px] lg:text-[16px]">
                      ইউপি ধার্য্য কৃত কর:
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2  p-2 rounded-lg mb-1"
                    name="UP_collected_tax"
                  />
                </div>
              </div>
            </div>

            <div className="form-control">
              <div className="form-control">
                <button
                  type="submit"
                  className="btn bg-[#57e557] text-white hover:bg-[#07b107]"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Submission date */}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewBusiness;
