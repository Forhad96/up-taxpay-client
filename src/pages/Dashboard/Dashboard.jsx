import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./dashboard.css";
import useCountData from "../../hooks/useCountData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import bnNumToEnNum from "../../utils/bnNumToEnNum";
import convertBanglaToEnglish from "../../utils/banglaToEnglishNum";

const Dashboard = () => {
  const totalCount = useCountData();

  const [totalHouseTax, setTotalHouseTax] = useState(0);
  const [totalBusinessTax, setTotalBusinessTax] = useState(0);

  const [totalHouseTaxPayed, setTotalHouseTaxPayed] = useState(0);
  const [totalBusinessTaxPayed, setTotalBusinessTaxPayed] = useState(0);

  const [data] = useGetData("/collection/house");
  const [businessData] = useGetData("/collection/business");
  const [taxData] = useGetData("/collection/tax");
  const [adminCounts] = useGetData("/collection/users");

  useEffect(() => {
    let total = 0;

    data?.forEach((house) => {
      const taxToPay = convertBanglaToEnglish(
        house?.tax_based_on_assessment.trim().split(" ")[0].replace(/,/g, "")
      );
      total += +taxToPay;
    });

    setTotalHouseTax(total);
  }, [data]);

  useEffect(() => {
    let totalBusiness = 0;

    businessData?.forEach((business) => {
      const taxToPay = convertBanglaToEnglish(
        business?.assesment_tax.trim().split(" ")[0].replace(/,/g, "")
      );
      // console.log(taxToPay);
      totalBusiness += +taxToPay;
    });

    console.log(totalBusiness);

    setTotalBusinessTax(totalBusiness);
  }, [businessData]);

  // useEffect(() => {
  //   let totalHousePayed = 0;
  //   let totalBusinessPayed = 0;

  //   taxData?.forEach(({ amount, type }) => {
  //     const taxToPay = convertBanglaToEnglish(
  //       amount.split(" ")[0].replace(/,/g, "")
  //     );
  //     // console.log(taxToPay);
  //     if (type === "household") {
  //       totalHousePayed += +taxToPay;
  //     } else if (type === "business") {
  //       totalBusinessPayed += +taxToPay;
  //     }
  //   });

  //   setTotalHouseTaxPayed(totalHousePayed);
  //   setTotalBusinessTaxPayed(totalBusinessPayed);

  //   // console.log(totalBusiness);

  //   // setTotalBusinessTax(totalBusiness);
  // }, [taxData]);

  const TaxData = [
    {
      user: "সকল গৃহস্ত",
      userData: totalCount?.house,
      path: "/household",
    },
    {
      user: "সকল ব্যবসা",
      userData: totalCount?.business,
      path: "/business",
    },
    {
      user: "গৃহ্য কর",
      userData: totalHouseTax,
    },
    {
      user: "ব্যবসা কর",
      userData: totalBusinessTax,
    },
    {
      user: "গৃহস্থ কর আদায়",
      userData: totalHouseTaxPayed,
    },
    {
      user: "ব্যবসা কর আদায়",
      userData: totalBusinessTaxPayed,
    },

    {
      user: "ব্যবহারকারী/অপারেটর",
      userData: adminCounts.length,
    },
  ];

  return (
    <div className="p-8">
      <div className="gridLayout">
        {TaxData?.map((user, idx) => {
          // Define an array of background colors
          const colors = ["bg-[#17A2B8]", "bg-[#DC3545]", "bg-[#FFC107]"];

          // Use modulo operator to cycle through the colors
          const bgColor = colors[idx % colors.length];

          return (
            <div
              key={idx}
              className={`card  ${
                bgColor == "bg-[#FFC107]" ? "text-black" : "text-white"
              } ${bgColor} space-y-8 shadow-xl`}
            >
              <div className="card-body space-y-3 min-h-[200px]">
                <h2 className="card-title  text-[22px] leading-9">
                  {user.user}
                </h2>
                <p className=" text-[19px]">{user.userData}</p>
                <div className=" flex gap-2  items-center">
                  <Link to={user?.path} className=" text-[16px]">
                    বিস্তারিত
                  </Link>
                  <BsFillArrowRightCircleFill className="text-[16px]"></BsFillArrowRightCircleFill>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
