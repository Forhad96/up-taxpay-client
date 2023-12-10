const Form = () => {
  const formFields = [
    {
      label: "গ্রাম:",
      type: "select",
      name: "village",
      options: ["গবিন্দপুর", "Java", "Go"],
    },
    {
      label: "থানা প্রধানের নাম:",
      type: "text",
      name: "thana",
      defaultValue: "মোছা: আয়শা বেগম",
    },
    {
      label: "পিতা/স্বামীর নাম:",
      type: "text",
      name: "fatherOrHusbandName",
      defaultValue: "মোছা: আয়শা বেগম",
    },
    {
      label: "হোল্ডিং নং:",
      type: "text",
      name: "holdingNumber",
      defaultValue: "32900",
    },
    {
      label: "বাড়ির জমির পরিমান:",
      type: "text",
      name: "landArea",
      defaultValue: "5",
    },
    {
      label: "পরিবারের মোট সদস্য সংখ্যা:",
      type: "text",
      name: "totalFamilyMembers",
      defaultValue: "5",
    },
    {
      label: "পরিবারের অশিক্ষিত সংখ্যা:",
      type: "text",
      name: "illiterateFamilyMembers",
      defaultValue: "5",
    },
    {
      label: "পরিবারের মহিলা সংখ্যা:",
      type: "text",
      name: "femaleFamilyMembers",
      defaultValue: "5",
    },
    {
      label: "পরিবারের বেকার সংখ্যা:",
      type: "text",
      name: "unemployedFamilyMembers",
      defaultValue: "5",
    },
    {
      label: "১৮ + বৎসর:",
      type: "text",
      name: "eighteenPlusAgeMembers",
      defaultValue: "5",
    },
    {
      label: "বাড়ির মালিকানা:",
      type: "radio",
      name: "houseOwnership",
      options: [
        { label: "নিজস্ব", value: "own" },
        { label: "ভাড়াকৃত", value: "rented" },
      ],
    },
    { label: "ওয়ার্ড:", type: "text", name: "word", defaultValue: "5" },
    {
      label: "খানা প্রধানের মোবাইল:",
      type: "text",
      name: "headOfFamilyMobile",
      defaultValue: "012568973",
    },
    {
      label: "জাতীয় পরিচয়পত্র নং:",
      type: "text",
      name: "nationalId",
      defaultValue: "012568973",
    },
    { label: "পেশা:", type: "text", name: "occupation", defaultValue: "কৃষি" },
    {
      label: "ধর্ম:",
      type: "select",
      name: "religion",
      options: ["ইসলাম ধর্ম", "হিন্দু ধর্ম", "খ্রিষ্ট ধর্ম"],
    },
    {
      label: "পরিবারের শিক্ষিত সংখ্যা:",
      type: "text",
      name: "educatedFamilyMembers",
      defaultValue: "012568973",
    },
    {
      label: "পরিবারের পুরুষ সংখ্যা:",
      type: "text",
      name: "maleFamilyMembers",
      defaultValue: "012568973",
    },
    {
      label: "পরিবারের কর্মজীবী সংখ্যা:",
      type: "text",
      name: "employedFamilyMembers",
      defaultValue: "012568973",
    },
    {
      label: "০-১৮ বৎসর:",
      type: "text",
      name: "zeroToEighteenAgeMembers",
      defaultValue: "012568973",
    },
    {
      label: "মোট পুরুষ ভোটার:",
      type: "text",
      name: "totalMaleVoters",
      defaultValue: "012568973",
    },
    {
      label: "মুক্তিযোদ্ধা সংখ্যা:",
      type: "text",
      name: "freedomFighterCount",
      defaultValue: "012568973",
    },
    {
      label: "মোট মহিলা ভোটার:",
      type: "text",
      name: "totalFemaleVoters",
      defaultValue: "5",
    },
    {
      label: "পরিবারের বিধবা সংখ্যা:",
      type: "text",
      name: "widowCount",
      defaultValue: "5",
    },
    {
      label: "পরিবারের প্রতিবন্ধী সংখ্যা:",
      type: "text",
      name: "disabledCount",
      defaultValue: "5",
    },
    {
      label: "পরিবারের তালাকপ্রাপ্ত সংখ্যা:",
      type: "text",
      name: "divorcedCount",
      defaultValue: "012568973",
    },
    {
      label: "ইউপি থেকে প্রাপ্ত সুবিধা:",
      type: "text",
      name: "facilitiesFromUnionCouncil",
      defaultValue: "012568973",
    },
    {
      label: "লিঙ্গ:",
      type: "radio",
      name: "gender",
      options: [
        { label: "পুরুষ", value: "male" },
        { label: "মহিলা", value: "female" },
      ],
    },
    {
      label: "মোট মহিলা ভোটার:",
      type: "text",
      name: "totalFemaleVoters",
      defaultValue: "5",
    },
    {
      label: "পরিবারের বিধবা সংখ্যা:",
      type: "text",
      name: "widowCount",
      defaultValue: "5",
    },
    {
      label: "পরিবারের প্রতিবন্ধী সংখ্যা:",
      type: "text",
      name: "disabledCount",
      defaultValue: "5",
    },
    {
      label: "পরিবারের তালাকপ্রাপ্ত সংখ্যা:",
      type: "text",
      name: "divorcedCount",
      defaultValue: "012568973",
    },
    {
      label: "ইউপি থেকে প্রাপ্ত সুবিধা:",
      type: "text",
      name: "facilitiesFromUnionCouncil",
      defaultValue: "012568973",
    },
    {
      label: "ল্যাট্রিন:",
      type: "text",
      name: "latrine",
      defaultValue: "012568973",
    },
    {
      label: "আবাদি জমির পরিমান(বাড়ি ভিটা ছাড়া):",
      type: "text",
      name: "cultivableLandArea",
      defaultValue: "012568973",
    },
    {
      label: "বাড়ির মূল্য:",
      type: "text",
      name: "houseValue",
      defaultValue: "012568973",
    },
    {
      label: "ইউপি কর্তৃক ধার্য্য কৃত কর:",
      type: "text",
      name: "taxPaidToUnionCouncil",
      defaultValue: "012568973",
    },
    {
      label: "এসেসমেন্ট অনুযায়ী কর:",
      type: "text",
      name: "taxBasedOnAssessment",
      defaultValue: "500",
    },
    {
      label: "নলকূপ:",
      type: "radio",
      name: "tubeWell",
      options: [
        { label: "আছে", value: "available" },
        { label: "নাই", value: "notAvailable" },
      ],
    },
  ];

  return (
    <div>
      <form className="grid grid-cols-3">
        {formFields.map((field, idx) => (
          <div key={idx} className="form-control">
            <label className="label">
              <span className="font-bold">{field.label}</span>
            </label>
            <input
              type={field.type}
              placeholder=""
              defaultValue={"মোছা: আয়শা বেগম"}
              className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
              required
            />
          </div>
        ))}
      </form>
    </div>
  );
};
export default Form;
