const AddNewVillage = () => {
    return (
      <form className="form-control">
        <input
          type="text"
          className="input input-bordered input-primary w-full"
          name="name"
          placeholder="নাম"
        />
        <select
          name="word"
          className="select select-bordered select-primary w-full"
        >
          <option value="গ্রাম">গ্রাম</option>
          <option value="শহর">শহর</option>
          <option value="বাজার">বাজার</option>
        </select>
        <textarea
          name="comment"
          className="textarea textarea-bordered textarea-primary w-full"
          placeholder="মন্তব্য"
          defaultValue={""}
        />
        <div className="flex justify-between">
          <button type="submit" className="btn btn-primary">
            সেভ করুন
          </button>
          <button type="button" className="btn btn-outline-primary">
            বন্ধ করুন
          </button>
        </div>
      </form>
    );
};
export default AddNewVillage;