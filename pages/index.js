// Libraries
import React from "react";
import { withRedux } from "../lib/redux";
import axios from "axios";
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
  
  const res = await axios.get('http://18.237.242.89/api/problems');
  const problems = await res.data;
  dispatch({
    type: "GET_PROBLEMS",
    problems: problems.data
  });
  return {};
};

export default withRedux(IndexPage);
