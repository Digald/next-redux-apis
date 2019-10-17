// Libraries
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { withRedux } from "../lib/redux";
import axios from "axios";
// Components
import Layout from "../components/Layout";
import ListItems from "../components/ListItems";

const IndexPage = () => {
  return (
    <>
      <Layout />
      <ListItems />
      <style jsx>{``}</style>
    </>
  );
};

IndexPage.getInitialProps = async ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  let res;
  let problems;
  try {
    res = await axios.get(
      "https://cors-anywhere.herokuapp.com/http://18.237.242.89/api/problems"
    );
    problems = await res.data;
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: "GET_PROBLEMS",
    problems: problems.data
    // pages: problems.data.pages,
    // nextPage: 2,
    // hasMore: (2 <= problems.data.pages ? true : false)
  });
  return {};
};

export default withRedux(IndexPage);
