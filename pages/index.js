// Libraries
import React from "react";
import { withRedux } from "../lib/redux";
import fetch from "isomorphic-unfetch";
// Components
import Layout from "../components/Layout";
import ListItems from "../components/ListItems";

const IndexPage = (props) => {
  return (
    <>
      <Layout pathname={props.pathname} asPath={props.asPath}/>
      <ListItems title="List of Problems" list="problems" />
      <style jsx>{``}</style>
    </>
  );
};

IndexPage.getInitialProps = async ({ reduxStore, pathname, asPath }) => {
  const { dispatch } = reduxStore;
  const res = await fetch("http://18.237.242.89/api/problems");
  const data = await res.json();
  dispatch({
    type: "GET_PROBLEMS",
    problems: data.data.problems,
    pages: data.data.pages,
    currentPage: 1,
  });
  return { pathname, asPath };
};

export default withRedux(IndexPage);
