// Libraries
import React from "react";
import { useDispatch } from "react-redux";
import { withRedux } from "../lib/redux";
// Components
import Layout from "../components/Layout";

const PassagesPage = () => {
  return (
    <>
      <Layout />
      <style jsx>{``}</style>
    </>
  );
};

PassagesPage.getInitialProps = ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  // dispatch({
  //   type: 'TICK',
  //   light: typeof window === 'object',
  //   lastUpdate: Date.now()
  // })

  return {};
};

export default withRedux(PassagesPage);
