import React from "react";

function Navbar(props) {
  const [modalState, setModalState] = React.useState("none");
  const [selectedYear, setSelectedYear] = React.useState(2021);

  const inquiryOnClick = () => {
    setModalState(modalState == "none" ? "block" : "none");
  };

  const changeYearHandler = (year) => {
    setSelectedYear(year);
    props.setGlobalSelectedYearState(year);
  };

  return (
    <div className="navbar">
      {/* <h1>LIHKG in 2021</h1> */}
      <div className="year">
        <button
          id={selectedYear == 2021 ? "selected_year" : ""}
          onClick={() => changeYearHandler(2021)}
        >
          2021
        </button>
        <button
          id={selectedYear == 2022 ? "selected_year" : ""}
          onClick={() => changeYearHandler(2022)}
        >
          2022
        </button>
      </div>
      <div className="info">
        {/* <div className="inquiry">?</div> */}
        <button className="inquiry" onClick={inquiryOnClick}>
          ?
        </button>
        <div
          className="modalBackdrop"
          style={{ display: modalState }}
          onClick={() => setModalState("none")}
        >
          <div class="modal-container">
            <div class="modal-content">
              <span>
                Note that the data was collected in advance and therefore cannot
                possibly reflect the actual up-to-date figures. For example,
                some users may have deleted their profile after the data is
                collected and some data may be missing (est. ~1%) due to
                unexpected errors during data collection. Therefore, please take
                this with a grain of salt. That being said, this should give us
                a pretty good idea about LIHKG.
              </span>
              <br />
              <br />
              <span>
                Also, just to make it clear that this website has no affiliation
                whatsoever with LIHKG. It is nothing more than a for-fun side
                project.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
