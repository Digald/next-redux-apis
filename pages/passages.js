import React from "react";
import { withRedux } from "../lib/redux";
import fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";
import ListItems from '../components/ListItems';

/**
 * Shows a list of all passages from the API. When first hitting this page, it will add passages to the redux store.
 */

const PassagesPage = (props) => {
  return (
    <>
      <Layout pathname={props.pathname} asPath={props.asPath}/>
      <ListItems title="List of Passages" list="passages"/>
    </>
  );
};

PassagesPage.getInitialProps = async ({ reduxStore, pathname, asPath }) => {
  const { dispatch } = reduxStore;
  const res = await fetch('http://18.237.242.89/api/passages');
  const data = await res.json();
  dispatch({
    type: "GET_PASSAGES",
    passages: data.data.passages,
    pages: data.data.pages,
    currentPage: 1
  });
  return { pathname, asPath };
};

export default withRedux(PassagesPage);
