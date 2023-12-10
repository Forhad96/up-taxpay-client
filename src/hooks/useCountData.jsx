import useGetData from "./useGetData";

const useCountData = () => {
    const [totalCount] = useGetData("/collection/totalCount")

    return  totalCount
};
export default useCountData;