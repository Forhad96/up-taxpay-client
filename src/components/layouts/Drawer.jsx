import Dashboard from "../../pages/Dashboard/Dashboard";
import DashboardRoutes from "../Dashboard/DashboardRoutes";

const Drawer = () => {
  //Checking the merge command work or not
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-[white]">
        <DashboardRoutes></DashboardRoutes>
      </ul>
    </div>
  );
};
export default Drawer;
