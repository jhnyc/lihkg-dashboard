import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

function Navbar() {
  const [modalState, setModalState] = React.useState("none");

  const inquiryPopover = () => {
    return (
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Header as="h3">{`Popover bottom`}</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        }
      >
        <button className="inquiry">?</button>
      </OverlayTrigger>
    );
  };

  const inquiryOnClick = () => {
    setModalState(modalState == "none" ? "block" : "none");
  };

  return (
    <div className="navbar">
      <h1>LIHKG in 2021</h1>
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
