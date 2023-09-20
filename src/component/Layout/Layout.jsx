import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loader from "component/kit/Loader/Loader";

import "./Layout.scss";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
