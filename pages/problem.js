// Libraries
import React from "react";
import { useDispatch } from "react-redux";
import { withRedux } from "../lib/redux";
// Components
import Layout from "../components/Layout";
import ProblemDetails from "../components/ProblemDetails";

const ProblemPage = () => {
  return (
    <>
      <Layout />
      <ProblemDetails />
      <style jsx>{``}</style>
    </>
  );
};

ProblemPage.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default withRedux(ProblemPage);
