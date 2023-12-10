//testing
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Admin/Login";
import MainDashboard from "../components/layouts/MainDashboard";
import Dashboard from "../pages/Dashboard/Dashboard";
import Setting from "../pages/Setting/Setting";
import Village from "../pages/Village/Village";
import Household from "../pages/Household/Household";
import Business from "../pages/Business/Business";
import HouseholdTax from "../pages/HouseholdTax/HouseholdTax";
import Operator from "../pages/Admin/Operator";
import EditVillage from "../pages/Village/EditVillage";
import AddHousehold from "../pages//Household/AddHousehold";
import TaxPaymentDetails from "../pages/shared/Tax-Payment/TaxPaymentDetails/TaxPaymentDetails";
import HouseholdDetails from "../pages/Household/HouseholdDetails";
import HouseholdUpdate from "../pages/Household/HouseholdUpdate";
import NewBusiness from "../pages/Business/NewBusiness";
import BusinessClientDetails from "../pages/Business/BusinessClientDetails";
import NewVillage from "../pages/Village/NewVillage";
import EditAdmin from "../pages/Admin/EditAdmin";
import AddAdmin from "../pages/Admin/AddAdmin";
import BusinessUpdate from "../pages/Business/BusinessUpdate";
import TaxPage from "../pages/Tax/TaxPage";
import AdminRoute from "./AdminRoute";
import TaxPayerDetails from "../pages/Tax/TaxPayerDetails";
import UpdateTax from "../pages/Tax/UpdateTax";

const routes = createBrowserRouter([
  
  {
    path: "/",
    element: <App></App>,
    children: [
          {
            index:true,
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/setting",
            element: <Setting></Setting>,
          },
          {
            path: "/village",
            element: <AdminRoute><Village></Village></AdminRoute>
          },
          {
            path: "/household",
            element: (
              <AdminRoute>
                <Household></Household>
              </AdminRoute>
            ),
          },
          {
            path: "/business",
            element: <Business></Business>,
          },
          {
            path: "/household-tax",
            element: <HouseholdTax></HouseholdTax>,
          },
          {
            path: "/operator",
            element: <Operator></Operator>,
          },
          {
            path: "/edit-admin/:id",
            element: <EditAdmin />,
          },
          {
            path: "/add-admin",
            element: <AddAdmin />,
          },
          {
            path: "/edit-village/:id",
            element: <EditVillage></EditVillage>,
          },
          {
            path: "/add-household",
            element: <AddHousehold></AddHousehold>,
          },
          {
            path: "/tax-payment-details",
            element: <TaxPaymentDetails></TaxPaymentDetails>,
          },
          {
            path: "/update-tax/:id",
            element: <UpdateTax />,
          },
          {
            path: "/household-details/:id",
            element: <HouseholdDetails></HouseholdDetails>,
          },
          {
            path: "/household-update/:id",
            element: <HouseholdUpdate></HouseholdUpdate>,
          },
          {
            path: "/new-business",
            element: <NewBusiness></NewBusiness>,
          },
          {
            path: "/businessClientsDetails/:id",
            element: <BusinessClientDetails></BusinessClientDetails>,
          },

          {
            path: "/addNew-village",
            element: <NewVillage></NewVillage>,
          },
          {
            path: "/businessUpdate/:id",
            element: <BusinessUpdate></BusinessUpdate>,
          },
          {
            path: "/tax",
            element: <TaxPage></TaxPage>,
          },
          {
            path: "/tax-payer/:id",
            element: <TaxPayerDetails></TaxPayerDetails>,
          }
        ],
      },
      
        {
          path:'/login',
          element:<Login></Login>
        }
    ],

);
export default routes;
