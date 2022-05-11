import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

function Navbar() {
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
    </OverlayTrigger>)
  };

  return (
    <div className="navbar">
      <h1>LIHKG in 2021</h1>
      <div className="info">
        {/* <div className="inquiry">?</div> */}
        {inquiryPopover()}
      </div>
    </div>
  );
}

export default Navbar;
