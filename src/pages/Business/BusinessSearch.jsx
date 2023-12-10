// import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
// import { BiSolidBusiness } from "react-icons/bi";
import PropTypes from "prop-types";
const BusinessSearch = ({ setQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const owner_name = form.get("owner_name");
    const shop_no = form.get("shop_no");
    const phone = form.get("phone");
    console.log(phone);
    if (owner_name) {
     return setQuery(owner_name);
    }
    if (shop_no) {
     return setQuery(shop_no);
    }

    if (phone) {
     return setQuery(phone);
    }
    return setQuery(null);
  };


  return (
    <div className="flex justify-between  border-[1px] border-green-400 bg-white items-center mt-3 rounded-lg py-5 px-5 gap-5">
      <form onSubmit={handleSubmit} className="flex gap-4 w-11/12">
        <input
          type="text"
          placeholder="Search by owner_name"
          name="owner_name"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="text"
          placeholder="Search Shop_no"
          name="shop_no"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />

        <input
          type="text"
          placeholder="Search Mobile"
          name="phone"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="submit"
          value={"search"}
          className="btn outline-none border-none  btn-sm focus-within:outline-none bg-green-400 text-white hover:bg-green-600"
        />
      </form>

      <Link
        to="/new-business"
        className="flex btn outline-none border-none  btn-sm focus-within:outline-none bg-green-400 text-white hover:bg-green-600 items-center  gap-1 justify-end p-3"
      >
        <TiPlus></TiPlus>
        <span className="-mt-1">নতুন ব্যবসা</span>
      </Link>
    </div>
  );
};

BusinessSearch.propTypes = {
  setQuery: PropTypes.func.isRequired,
}

export default BusinessSearch;
