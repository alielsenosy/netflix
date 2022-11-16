import React from "react";

const Kids = () => {
  return (
    <div
      className="text-white"
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
              src="https://occ-0-4609-185.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
              alt=""
            />
          </div>
          <div className="col-sm-6 text-start px-5">
            <h1
              style={{
                marginTop: "100px",
                marginBottom: "20px",
                fontSize: "3rem",
              }}
            >
              Create profiles for kids.
            </h1>
            <h4>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
