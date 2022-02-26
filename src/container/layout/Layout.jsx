import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
