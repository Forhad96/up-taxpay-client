import { useEffect, useState } from "react";
import BASE_URL from "../api/api";

const usePutData = (endpoint, data) => {
  const [res, setRes] = useState("");

  useEffect(() => {
    fetch(BASE_URL + endpoint, {
      method: "PUT",
      headers: "application/json",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setRes(data));
  }, [BASE_URL, endpoint, data]);

  return { res };
};

export default usePutData;
