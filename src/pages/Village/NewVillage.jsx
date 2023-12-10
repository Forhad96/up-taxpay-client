import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import Swal from "sweetalert2";
import { modifyData } from "../../api/api";

const NewVillage = () => {
  const goTo = useNavigate();

  //Village correction form handler
  const handleVillageCorrection = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const villageData = Object.fromEntries(form);
    console.log(villageData);


try {
  // modifyData is a function to do post/put
  const res = await modifyData("/collection/villages", "POST", villageData);
  console.log(res.acknowledged);
  if (res.acknowledged) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "সফলভাবে একটি নতুন গ্রাম নিবন্ধিত হয়েছে!",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset()
        // goTo("/village");
  }
} catch (error) {
  console.log(error);
}




 
    // toast.success("Edited");

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <form
        onSubmit={handleVillageCorrection}
        className="card-body w-[90%] relative lg:w-1/2 bg-white top-0"
      >
        <div className="absolute -top-7 right-[45%] border-2 bg-white p-1 rounded-full">
          <AiFillHome className="text-5xl text-cyan-400"></AiFillHome>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold pb-2 text-center mt-5">
          নতুন গ্রাম
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
              গ্রামের নামঃ
            </span>
          </label>
          <input
            type="text"
            name="village"
            placeholder="গ্রামের নাম লিখুনঃ"
            className="p-2 focus-within:outline-none border-b bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
              ওয়ার্ড:
            </span>
          </label>
          <input
            type="text"
            name="word"
            placeholder="word"
            className="p-2 focus-within:outline-none border-b bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
              মন্তব্য
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered focus-within:outline-none"
            placeholder="Comment"
            name="comment"
          ></textarea>
        </div>
        <div className=" flex gap-3 mt-6">
          <Link
            to="/village"
            className="flex-1 flex items-center gap-2 justify-center"
          >
            <AiOutlineLeft className="font-bold text-xl"></AiOutlineLeft>
            Go back
          </Link>
          <button
            type="submit"
            className="btn bg-[#65c50a] flex-1 text-white hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewVillage;
