import React from "react";

// This component will appear if a user tries to reach a route that hasn't been provided any state yet.
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
