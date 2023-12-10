import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import MainDashboard from "./components/layouts/MainDashboard";

function App() {
  return (
    <>
      <MainLayout>
        <MainDashboard></MainDashboard>
      </MainLayout>
      
    </>
  );
}

export default App;
