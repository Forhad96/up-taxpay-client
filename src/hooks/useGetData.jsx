import { useEffect, useState } from "react";
import BASE_URL from "../api/api";
import filterData from "../utils/filterData";
// const BASE_URL = "http://localhost:5000";
const useGetData = (endpoint, query) => {
  const [resData, setResData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch data (status ${response.status})`);
        }

        const data = await response.json();
        console.log(query);
        if (query) {
          const queryData = data?.filter((item) => {
            // this utility function for check filter condition
            return filterData(item, query);
          });

          setResData(queryData);
        } else {
          setResData(data);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();

    // fetch(BASE_URL + endpoint)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (query) {
    //       const queryData = data?.filter((item) => {

    //         // this is a utility function for filtering data
    //        return filterData(item,query)
    //       })
    //       setResData(queryData);
    //       setIsLoading(false);
    //     }
    //     else if(!query){
    //       setResData(data);
    //       setIsLoading(false);
    //     }
    //     else{

    //       setResData(data);
    //       setIsLoading(false);
    //     }
    //   });
  }, [endpoint, query]);
  return [resData, isLoading, setResData];
};
export default useGetData;
