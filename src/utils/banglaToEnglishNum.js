function convertBanglaToEnglish(banglaNumber) {
  const banglaToEnglishMap = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };

  return banglaNumber.replace(
    /[০-৯]/g,
    (match) => banglaToEnglishMap[match] || match
  );
}

export default convertBanglaToEnglish;
