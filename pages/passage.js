import React from "react";
import { withRedux } from "../lib/redux";
import Layout from "../components/Layout";
import PassageDetails from "../components/PassageDetails";

/**
 * The page for a single passage. Contains a header component and PageDetails which displays passage information
 */

const PassagePage = (props) => {
  return (
    <>
      <Layout pathname={props.pathname} asPath={props.asPath}/>
      <PassageDetails />
    </>
  );
};

PassagePage.getInitialProps = ({pathname, asPath }) => {
  return { pathname, asPath };
};

export default withRedux(PassagePage);
