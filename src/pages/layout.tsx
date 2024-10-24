import Footer from "@/components/footer/footer";
import { NavBar } from "@/components/navbar/nav-bar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
