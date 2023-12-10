const bnNumToEnNum = (str) => {
  // Define a mapping of Bangla numerals to their English numeral equivalents
  let banglaNumber = {
    "০": 0,
    "১": 1,
    "২": 2,
    "৩": 3,
    "৪": 4,
    "৫": 5,
    "৬": 6,
    "৭": 7,
    "৮": 8,
    "৯": 9,
  };

  // Iterate over each key (Bangla numeral) in the mapping
  for (let number in banglaNumber) {
    // Replace all occurrences of the Bangla numeral in the input string with its English equivalent
    str = str.replace(new RegExp(number, "g"), banglaNumber[number]);
    console.log(str);
  }
  // Return the modified string with Bangla numerals converted to English numerals
  return str;
};
export default bnNumToEnNum;
