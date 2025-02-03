import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Loader from "../components/loader/Loader";
import { useContext } from "react";
import GlobalContext from "../../contexts/globalContext";

export default function DefaultLayout() {
  const { isLoading } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", height: "100%" }}>
        <Outlet />
      </main>
      <Footer />
      {isLoading && <Loader />}
    </>
  );
}
