import React from "react";

const EveryWhere = () => {
  return (
    <div
      className="everyWhere text-white"
      style={{
        backgroundColor: "black",
        borderBottom: "8px solid #222",
      }}
    >
      <div class="container text-center w-75">
        <div class="row">
          <div class="col-sm-6 text-start px-5">
            <h1
              style={{
                marginTop: "100px",
                marginBottom: "20px",
                fontSize: "3rem",
              }}
            >
              Watch everywhere.
            </h1>
            <h4>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h4>
          </div>
          <div class="col-sm-6">
            <img
              className="w-100"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryWhere;
