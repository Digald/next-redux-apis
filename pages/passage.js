// Libraries
import React from "react";
import { useDispatch } from "react-redux";
import { withRedux } from "../lib/redux";
// Components
import Layout from "../components/Layout";
import PassageDetails from "../components/PassageDetails";

const PassagePage = (props) => {
  return (
    <>
      <Layout pathname={props.pathname} asPath={props.asPath}/>
      <PassageDetails />
      <style jsx>{``}</style>
    </>
  );
};

PassagePage.getInitialProps = ({ reduxStore, pathname, asPath }) => {
  return { pathname, asPath };
};

export default withRedux(PassagePage);
