import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../../provider/AdminProvider";

const Navbar = () => {
  const { logout, user,setUser } = useContext(AdminContext);
  const goto = useNavigate();

  const handleLogout = () => {
    logout();
    setUser(false)
    goto("/login");
  };

  console.log(user);
  return (
    <div className="w-full flex items-center relative navbar bg-[#5cb904] text-white">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className=" cursor-pointer  absolute right-2 w-7 h-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <Link to={"/operator"} className="flex gap-3 flex-1 px-2 mx-2">
        <img
          className="w-[40px]"
          src="https://laxmipurup.uptaxs.com/public/uploaded/logo-bd.png"
          alt=""
        />
        <p>১ নং লক্ষীপুর ইউনিয়ন পরিষদ</p>
      </Link>
      <div className="flex-none hidden lg:block">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://laxmipurup.uptaxs.com/public//upload/profiles/6Lj22iGX8Y-1648323906.png"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box">
            <div className="mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white rounded-lg text-gray-900">
              <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                  className="object-cover object-top w-full"
                  src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Mountain"
                />
              </div>
              <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center h-32"
                  src="https://laxmipurup.uptaxs.com/public//upload/profiles/6Lj22iGX8Y-1648323906.png"
                  alt="Woman looking front"
                />
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold">Admin</h2>
                <p className="text-gray-500 mt-2">{user ? user : null}</p>
              </div>

              <div className="p-4 border-t mx-8 mt-2 flex gap-3">
                <Link to={"/operator"}>
                  <button
                    type="button"
                    className="rounded bg-green-500  px-4 py-2 font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out transform hover:scale-105 hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
                    Profile
                  </button>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded bg-red-500 text-white px-4 py-1 font-semibold uppercase leading-normal shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out transform hover:scale-105 hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] whitespace-nowrap">
                  Sign out
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
