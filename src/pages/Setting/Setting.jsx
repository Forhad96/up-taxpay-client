import { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import BASE_URL from "../../api/api";

const Setting = () => {
  const [settingsData] = useGetData("/collection/settings");

  const [formData, setFormData] = useState({
    site_name: "",
    description: "",
    address: "",
    upazila: "",
    union: "",
    contact: "",
  });

  useEffect(() => {
    setFormData({
      site_name: settingsData[0]?.name || "",
      description: settingsData[0]?.description || "",
      address: settingsData[0]?.address || "",
      upazila: settingsData[0]?.upazila || "",
      union: settingsData[0]?.union || "",
      contact_no: settingsData[0]?.contact || "",
    });
  }, [settingsData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(BASE_URL + `/collection/settings/${settingsData[0]?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="flex items-center justify-center mt-10 lg:mt-16">
      <div className="max-w-lg p-6 rounded-lg bg-white shadow-2xl">
        <h3 className="text-4xl font-semibold text-center w-full">
          General Setting
        </h3>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-2">
              <div>
                <label
                  htmlFor="site_name"
                  className="text-lg font-semibold text-gray-800 mr-2"
                >
                  Site Name:
                </label>
                <input
                  type="text"
                  name="site_name"
                  id="site_name"
                  value={formData.site_name}
                  onChange={handleChange}
                  className="input input-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="contact_no"
                  className="text-lg font-semibold text-gray-800 mr-2"
                >
                  Contact No:
                </label>
                <input
                  type="text"
                  name="contact_no"
                  id="contact_no"
                  value={formData.contact_no}
                  onChange={handleChange}
                  className="input input-primary"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div>
                <label
                  htmlFor="state"
                  className="text-lg font-semibold text-gray-800 mr-2"
                >
                  Upazila Name:
                </label>
                <input
                  type="text"
                  name="upazila"
                  id="state"
                  value={formData.upazila}
                  onChange={handleChange}
                  className="input input-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="postal_code"
                  className="text-lg font-semibold text-gray-800 mr-2"
                >
                  Union Name:
                </label>
                <input
                  type="text"
                  name="union"
                  id="postal_code"
                  value={formData.union}
                  onChange={handleChange}
                  className="input input-primary"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="description"
                className="text-lg font-semibold text-gray-800 mr-2"
              >
                Description:
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="input input-primary"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="address"
                className="text-lg font-semibold text-gray-800 mr-2"
              >
                Address:
              </label>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="input input-primary"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full hover:bg-primary-dark"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
