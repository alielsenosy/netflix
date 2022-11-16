import React from "react";

const Tv = () => {
  return (
    <div
      className="tv text-white"
      style={{
        backgroundColor: "black",
        borderBottom: "8px solid #222",
        paddingBottom: "50px",
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
              Enjoy on your TV.
            </h1>
            <h4>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h4>
          </div>
          <div class="col-sm-6">
            <img
              className="w-100"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tv;
