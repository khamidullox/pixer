import { Outlet } from "react-router-dom";
import Novbar from "../components/Novbar";
import Footer from "../components/Footer";
function MainLayout() {
  return (
    <>
      <Novbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
