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
                Note that the data was collected in early-mid 2022 and therefore
                the figures may not be up-to-date. For example, some users may
                have deleted their profile after the data is collected. Also,
                some data may be missing due to unexpected errors during data
                collection. Therefore, please take this dashboard with a grain
                of salt. Nonetheless, this should be enough to give us a good
                idea about LIHKG in 2021.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
