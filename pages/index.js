// Libraries
import React from "react";
import { withRedux } from "../lib/redux";
import fetch from 'isomorphic-unfetch';
// Components
import Layout from "../components/Layout";
import ListItems from "../components/ListItems";

const IndexPage = () => {
  return (
    <>
      <Layout />
      <ListItems title="List of Problems" list="problems"/>
      <style jsx>{``}</style>
    </>
  );
};

IndexPage.getInitialProps = async ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  const res = await fetch('http://18.237.242.89/api/problems');
  const data = await res.json()
  dispatch({
    type: "GET_PROBLEMS",
    problems: await data,
  });
  return {};
};

export default withRedux(IndexPage);
