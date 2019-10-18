// Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import BottomScrollListener from "react-bottom-scroll-listener";
import fetch from "isomorphic-unfetch";
import ProblemItems from "./ProblemItems";
import PassageItems from "./PassageItems";

const useListItems = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const getMoreProblems = data => {
    dispatch({
      type: "GET_MORE_PROBLEMS",
      newList: data.problems,
      currentPage: store.problemsMeta.currentPage + 1
    });
  };
  const getMorePassages = data => {
    dispatch({
      type: "GET_MORE_PASSAGES",
      newList: data.passages,
      currentPage: store.passagesMeta.currentPage + 1
    });
  };
  return { store, getMoreProblems, getMorePassages };
};

const retrieveItems = (list, store, getMoreProblems, getMorePassages, hasMore) => {
  if (!hasMore) return;
  if (list === "problems") {
    const { pageUrl, currentPage } = store.problemsMeta;
    fetch(pageUrl + (currentPage + 1).toString())
      .then(res => res.json())
      .then(data => {
        getMoreProblems(data.data);
      });
  } else if (list === "passages") {
    const { pageUrl, currentPage } = store.passagesMeta;
    fetch(pageUrl + (currentPage + 1).toString())
      .then(res => res.json())
      .then(data => {
        getMorePassages(data.data);
      });
  }
};

const ListItems = props => {
  const { store, getMoreProblems, getMorePassages } = useListItems();
  let Items, hasMore;
  switch (props.list) {
    case "problems":
      Items = ProblemItems;
      hasMore = store.problemsMeta.hasMore;
      break;
    case "passages":
      Items = PassageItems;
      hasMore = store.passagesMeta.hasMore;
      break;
  }
  return (
    <>
      <div className="items-container">
        <BottomScrollListener
          onBottom={() =>
            retrieveItems(props.list, store, getMoreProblems, getMorePassages,hasMore)
          }
        >
          <Items />
        </BottomScrollListener>
      </div>
      <style jsx>{`
        .items-container {
          padding: 10px;
          border-radius: 20px;
          margin: 100px 10% 0 10%;
          max-width: 100%;
          flex-direction: column;
          background: white;
          color: black;
        }
        h1 {
          text-align: center;
        }
        @media (max-width: 768px) {
         .items-container {
            margin: 100px 0 0 0;
          }
      `}</style>
    </>
  );
};

export default ListItems;
