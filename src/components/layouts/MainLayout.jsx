import Drawer from "./Drawer";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Page content here */}
        {children}
      </div>
      {/* drawer side */}
      <Drawer></Drawer>
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
