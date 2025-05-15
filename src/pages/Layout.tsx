import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo({ top: 0, behavior: "smooth" }); // 'instant' for no animation
  }, [location.pathname]); // Re-run effect when the pathname changes

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
