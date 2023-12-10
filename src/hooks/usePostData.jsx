import { useEffect } from "react";
import BASE_URL from "../api/api";

const usePostData = (endpoint, data) => {
  useEffect(() => {
    fetch(BASE_URL + endpoint, {
      method: "POST",
      headers: "application/json",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [endpoint, data]);
};

export default usePostData;
