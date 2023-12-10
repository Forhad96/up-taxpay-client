import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import BASE_URL from "../api/api";
import useGetData from "../hooks/useGetData";

export const AdminContext = createContext(null);

const AdminProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  // const goTo = useNavi
  // const [adminsData, setAdminsData] = useState([]);
  const [adminsData] = useGetData("/collection/users");

  const [isLoading, setIsLoading] = useState(true);

  //   const navigate = useNavigate();
  // useEffect(() => {
  //   fetch(BASE_URL + "/collection/users")
  //     .then((res) => res.json())
  //     .then((data) => setAdminsData(data));
  // }, []);
  useEffect(() => {
    setIsLoading(true);
    const email = localStorage.getItem("email");
    if (email) {
      setUser(email);
    }
    setIsLoading(false);
  }, []);

  const login = (email, pass) => {
    // const user = adminsData?.find(
    //   // ({ Email, Password }) => email === Email && pass === Password
    // );

    adminsData.forEach(data =>{
      const matchEmail =  data.Email === email
      const matchPass = data.Password === Number(pass);



      console.log(matchEmail)
      console.log(matchPass)
     
      if(matchEmail && matchPass){
        console.log("correct");
        setUser(true)
      }else{
       console.log("wrong");
      }
     //  const password =  data.Email === email 
     // console.log(matchPass);
     })
      
    // if (user) {
    //   setUser(user);
    //   //   navigate("/");
    //   localStorage.setItem("email", email);
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const logout = () => {
    setUser(null);
    // navigate("/");
  };

  const adminData = { user, isLoading, login, logout, setUser};
  return (
    <AdminContext.Provider value={adminData}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
