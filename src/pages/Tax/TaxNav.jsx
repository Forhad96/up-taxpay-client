const TaxNav = ({ taxData, setAllTax, allTax }) => {
  const banglaMonthsInEnglish = [
    { label: "January", value: "জানুয়ারি" },
    { label: "February", value: "ফেব্রুয়ারি" },
    { label: "March", value: "মার্চ" },
    { label: "April", value: "এপ্রিল" },
    { label: "May", value: "মে" },
    { label: "June", value: "জুন" },
    { label: "July", value: "জুলাই" },
    { label: "August", value: "আগস্ট" },
    { label: "September", value: "সেপ্টেম্বর" },
    { label: "October", value: "অক্টোবর" },
    { label: "November", value: "নভেম্বর" },
    { label: "December", value: "ডিসেম্বর" },
    { label: "", value: "none" },
  ];

  const handleType = (e) => {
    const type = e.target.value;
    if (type === "all") {
      return setAllTax(taxData);
    }
    setAllTax(taxData.filter((data) => data.type.includes(type)));
  };

  const handleMonth = (e) => {
    const month = e.target.value;

    if (month === "all") {
      return setAllTax(taxData);
    }

    setAllTax(
      taxData.filter(
        (data) => data.startMonth.toLowerCase() === month.toLowerCase()
      )
    );
  };

  const handleEndMonth = (e) => {
    const month = e.target.value;

    if (month === "all") {
      return setAllTax(taxData);
    }

    setAllTax(
      taxData.filter(
        (data) => data.endMonth.toLowerCase() === month.toLowerCase()
      )
    );
  };

  const handleName = (e) => {
    const name = e.target.value;

    if (!name) {
      return setAllTax(taxData);
    }
    setAllTax(
      taxData.filter((data) =>
        data.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const handleAmount = (e) => {
    const amount = e.target.value;

    if (!amount || amount < 0) {
      return setAllTax(taxData);
    }
    setAllTax(taxData.filter((data) => +data.amount <= amount));
  };

  return (
    <div className="flex justify-between  border-[1px] border-green-400 bg-white items-center mt-3 rounded-lg py-5 px-5 gap-5 mb-5">
      <form className="flex gap-4 w-11/12">
        <select
          name="select"
          defaultValue="amount"
          onChange={(e) => setAmount(e.target.value)}
          className="select select-sm select-success w-full "
        >
          <option value="amount">amount</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={150}>150</option>
          <option value={200}>200</option>
          <option value={250}>250</option>
          <option value={300}>300</option>
          <option value={350}>350</option>
          <option value="">None</option>
        </select>
        <select
          name="type"
          defaultValue="select"
          className="select select-sm select-success w-full "
          onChange={handleType}
        >
          <option disabled value="select">
            type
          </option>
          <option value="all">All</option>
          <option value="business">Business</option>
          <option value="household">House</option>
        </select>

        <select
          name="starting_month"
          defaultValue="select"
          className="select select-sm select-success w-full "
          onChange={handleMonth}
        >
          <option disabled value="select">
            Starting Month
          </option>
          <option value="all">All</option>
          {banglaMonthsInEnglish.map((month) => (
            <option key={month.label} value={month.label}>
              {month.value}
            </option>
          ))}
        </select>
        <select
          name="starting_month"
          defaultValue="select"
          className="select select-sm select-success w-full "
          onChange={handleEndMonth}
        >
          <option disabled value="select">
            Ending Month
          </option>
          <option value="all">all</option>
          {banglaMonthsInEnglish.map((month) => (
            <option key={month.label} value={month.label}>
              {month.value}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name"
          name="name"
          onChange={handleName}
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="number"
          placeholder="Search by amount"
          name="amount"
          className="input input-bordered input-success w-full max-w-xs input-sm"
          onChange={handleAmount}
        />
      </form>
    </div>
  );
};
export default TaxNav;
