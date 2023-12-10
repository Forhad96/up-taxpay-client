// import TopNavBar from "../Dashboard/TopNavBar";
import { useState } from "react";
import DashboardRoutes from "../Dashboard/DashboardRoutes";
import { Outlet } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MainDashboard = () => {
  /// i am adding the new line
  const [reveal, setReveal] = useState(true);

  const handleReveal = () => {
    setReveal(!reveal);
  };
  return (
    <>
      {/* component */}

      <div className="h-full w-full  flex overflow-hidden antialiased text-gray-800 bg-white">
        {/* section body side nav */}
        <div className="flex-1 flex flex-col">
          {/* Dashboard routers */}
          <main className=" flex-grow flex min-h-0 border-t relative">
            <div className="hidden">
            {reveal ? (
                <AiOutlineLeft className="w-6 font-bold z-20 h-9 my-1 hidden  md:flex cursor-pointer absolute left-[264px] top-0 "
                onClick={handleReveal}
                ></AiOutlineLeft>
            ) : (
              <AiOutlineRight 
              className="w-6 h-9 left-3 hidden z-20  md:flex absolute cursor-pointer"
              onClick={handleReveal}
              ></AiOutlineRight>
            )}

            </div>

            <section
              className={` lg:flex hidden transition-all flex-col border-r-[1px]  max-w-sm flex-none  w-[300px] min-h-0 overflow-auto`}
            >
              <DashboardRoutes></DashboardRoutes>
            </section>
            <section className="flex-1 bg-[#f9f9f9]">
              <Outlet></Outlet>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
export default MainDashboard;
