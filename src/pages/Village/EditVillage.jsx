
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { modifyData } from "../../api/api";
import Swal from "sweetalert2";

const EditVillage = () => {
  const goTo = useNavigate();
  const {id} = useParams()
  const  [villages] = useGetData(`/collection/villages/${id}`) || []
const {village,word,comment} = villages
  //Village correction form handler
  const handleVillageCorrection = async(e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const updateVillage = Object.fromEntries(form);
    try {
      const res = await modifyData(`/collection/villages/${id}`,"PUT",updateVillage)
      if(res.modifiedCount > 0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "সফলভাবে একটি নতুন গ্রাম সংশোধন করা হয়েছে!",
          showConfirmButton: false,
          timer: 1500,
        });
        goTo("/village");
      }


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <form
        onSubmit={handleVillageCorrection}
        className="card-body w-[90%] lg:w-1/2 bg-white top-0"
      >
        <h1 className="text-2xl md:text-4xl font-bold pb-2">গ্রাম সংশোধন</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
              নাম
            </span>
          </label>
          <input
            type="text"
            name="village"
            placeholder="Name"
            defaultValue={village}
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
            defaultValue={word}
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
            defaultValue={comment}
            name="comment"
            className="textarea textarea-bordered focus-within:outline-none"
            placeholder="Comment"
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-green-500 text-white hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditVillage;
