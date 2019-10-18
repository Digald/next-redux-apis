// Libraries
import React from "react";
import { withRedux } from "../lib/redux";
import fetch from 'isomorphic-unfetch';
// Components
import Layout from "../components/Layout";
import ListItems from '../components/ListItems';

const PassagesPage = (props) => {
  return (
    <>
      <Layout pathname={props.pathname} asPath={props.asPath}/>
      <ListItems title="List of Passages" list="passages"/>
      <style jsx>{``}</style>
    </>
  );
};

PassagesPage.getInitialProps = async ({ reduxStore, pathname, asPath }) => {
  const { dispatch } = reduxStore;
  const res = await fetch('http://18.237.242.89/api/passages');
  const data = await res.json();
  dispatch({
    type: "GET_PASSAGES",
    passages: data
  });
  return { pathname, asPath };
};

export default withRedux(PassagesPage);
