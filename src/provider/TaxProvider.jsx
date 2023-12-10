// import { createContext, useEffect, useState } from "react";
// const TaxContext = createContext(null);

// const TaxProvider = ({ children }) => {
  
//       // taxpayer data 
//       const [taxpayers,setTaxPayers] = useState([])
//       const [loading,setLoading] = useState(true)

//       const useGetTaxData = (name) =>{
//             useEffect(()=>{
//                   fetch(`http://localhost:5000/taxPayers?name=${name}`) // &type=${type}&phone=${phone}
//                   .then(res => setTaxPayers(res.data))
//                   setLoading(false)
//                 },[name])

//                 return {loading,taxpayers}
//       } 
  
//       const taxInfo = {
//             useGetTaxData,
//       }

//   return (
//       <TaxContext.Provider value={taxInfo}>
//             {children}
//       </TaxContext.Provider>
//   );
// };

// export { TaxContext, TaxProvider }; // Export both TaxContext and TaxProvider
