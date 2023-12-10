
const filterData = (item, query) => {
  const {
    // household
    holding_number,
    national_id,
    head_of_household_mobile,
    head_of_household_name,
    father_or_husband_name,
    //  business
    owner_name,
    shop_no,
    phone
  } = item;
  // condition for house holing search
  const holdingMatch = holding_number?.includes(query.trim());
  const nidMatch = national_id?.includes(query.trim());
  const mobileMatch = head_of_household_mobile?.includes(query.trim());
  const headHouseholdMatch = head_of_household_name?.includes(query.trim());
  const fatherOrHusbandMatch = father_or_husband_name?.includes(query.trim());
  // Condition for business search
  const businessOwnerNameMatch = owner_name?.includes(query.trim());
  const shopNoMatch = shop_no?.includes(query.trim());
  const phoneNoMatch = phone?.includes(query.trim());

  return (
    holdingMatch ||
    nidMatch ||
    mobileMatch ||
    headHouseholdMatch ||
    fatherOrHusbandMatch ||
    businessOwnerNameMatch ||
    shopNoMatch ||
    phoneNoMatch
  );
};

export default filterData;
