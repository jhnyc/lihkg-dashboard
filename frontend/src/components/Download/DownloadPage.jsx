import React from "react";
import "./DownloadPage.css";

function DownloadPage() {
  return (
    <div className="download_page">
      <div className="container">
        <div className="narative">
          <h3 id="text">
            Randomly sampled subsets of the data in CSV format are made
            available for download. Play with the data and let’s see what
            interesting insights you can get out of them!
          </h3>
          {/* <h3 id="text">
          Play with the data and let’s see what interesting insights you can get
          out of them!
        </h3> */}
          <div className="download_button">
            <button id="download_button">
              <a href="https://www.kaggle.com/datasets/jhnyc3/lihkg-2021/download">
                Download
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
