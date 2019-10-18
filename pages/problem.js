import React from "react";
import { withRedux } from "../lib/redux";
import Layout from "../components/Layout";
import ProblemDetails from "../components/ProblemDetails";

/**
 * The page for a single problem. Contains a header component and PageDetails which displays problem information
 */

const ProblemPage = (props) => {
  return (
    <>
      <Layout pathname={props.pathname} asPath={props.asPath}/>
      <ProblemDetails />
    </>
  );
};

ProblemPage.getInitialProps = ({pathname, asPath }) => {
  return { pathname, asPath };
};

export default withRedux(ProblemPage);
