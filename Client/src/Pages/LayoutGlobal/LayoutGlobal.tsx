import { Outlet } from "react-router-dom";
import Navbar from "@Components/Molecules/Navbar/Navbar";
import "./LayoutGlobal.scss";

const LayoutGlobal: React.FC = () => {
  return (
    <div className="layout-global">
      <Navbar />
      <main className="layout-global__main">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutGlobal;
