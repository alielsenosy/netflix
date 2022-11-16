import React from "react";

const Download = () => {
  return (
    <div
      className="download text-white"
      style={{
        backgroundColor: "black",
        borderBottom: "8px solid #222",
        paddingBottom: "50px",
      }}
    >
      <div className="container text-center w-75">
        <div className="row">
          <div className="col-sm-6 position-relative">
            <img
              className="w-100"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
            />
            <div
              className="row w-75 m-auto py-4 position-absolute"
              style={{
                border: "2px solid hsla(0,0%,100%,.25)",
                borderRadius: ".75em",
                height: "105px",
                left: "11%",
                bottom: "0%",
                backgroundColor: "black",
              }}
            >
              <div className="col w-75 h-100">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt=""
                  className="w-50 h-100"
                />
              </div>
              <div className="col-5 text-start">
                <p className="fw-bold mb-0">Stranger Things</p>
                <p className="text-primary">Downloading...</p>
              </div>
              <div className="col">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-start px-5">
            <h1
              style={{
                marginTop: "100px",
                marginBottom: "20px",
                fontSize: "3rem",
              }}
            >
              Download your shows to watch offline.
            </h1>
            <h4>
              Save your favorites easily and always have something to watch.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
