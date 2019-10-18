// Libraries
import React from "react";
import { useDispatch } from "react-redux";
import { withRedux } from "../lib/redux";
// Components
import Layout from "../components/Layout";
import ProblemDetails from "../components/ProblemDetails";

const ProblemPage = (props) => {
  return (
    <>
      <Layout pathname={props.pathname} asPath={props.asPath}/>
      <ProblemDetails />
      <style jsx>{``}</style>
    </>
  );
};

ProblemPage.getInitialProps = ({ reduxStore, pathname, asPath }) => {
  return { pathname, asPath };
};

export default withRedux(ProblemPage);
