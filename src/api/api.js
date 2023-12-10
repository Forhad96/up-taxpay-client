// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://union-project-backend.vercel.app";

export const getData = async (endpoint) => {
  return fetch(BASE_URL + endpoint)
    .then((res) => res.json())
    .then((data) => data);
};

// export const modifyData = async (endpoint, method, data) => {
//   return fetch(BASE_URL + endpoint, {
//     method,
//     headers: "application/json",
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// };

export const modifyData = async (endpoint, method, data) => {
  try {
    const response = await fetch(BASE_URL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong");
  }
};

export default BASE_URL;
