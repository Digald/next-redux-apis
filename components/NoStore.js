import React from "react";

const NoStore = props => {
  return (
    <h2>
      No Selected {props.resource}
      <style jsx>{`
        h2 {
          background: white;
          padding-top: 100px;
          text-align: center;
        }
      `}</style>
    </h2>
  );
};

export default NoStore;
