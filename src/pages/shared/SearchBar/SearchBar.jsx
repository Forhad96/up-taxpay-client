import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
const SearchBar = ({}) => {
  return (
    <div className="flex justify-between border outline outline-lime-500 bg-white items-center m-3 rounded-lg py-5 px-5 gap-5">
      <form className="flex gap-4 w-11/12">
        <select
          defaultValue="select"
          className="select select-sm select-success w-full "
        >
          <option disabled value="select">
            50
          </option>
          <option>50</option>
          <option>100</option>
          <option>150</option>
          <option>200</option>
          <option>250</option>
          <option>300</option>
          <option>350</option>
        </select>
        <input
          type="text"
          placeholder="Search holding"
          name="phone"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="text"
          placeholder="Search house"
          name="phone"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="number"
          placeholder="Search Nid "
          name="nid"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="number"
          placeholder="Search Mobile"
          name="holding"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="submit"
          value={"search"}
          className="btn outline-none border-none  btn-sm focus-within:outline-none bg-accentClr text-white hover:bg-hoverClr"
        />
      </form>

      <Link to="/main-dashboard/add-household">
        <button className="btn outline-none border-none  btn-sm focus-within:outline-none bg-accentClr text-white hover:bg-hoverClr">
          <TiPlus></TiPlus>
          নতুন গৃহস্থ
        </button>
      </Link>
    </div>
  );
};
export default SearchBar;
