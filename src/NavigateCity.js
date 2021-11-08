import React from "react";

export default function NavigateCity() {
  return (
    <div className="row d-flex justify-content-start">
      <div className="col-auto">
        <input type="submit" value="London" className="btn" />
      </div>
      <div className="col-auto">
        <input type="submit" value="Paris" className="btn" />
      </div>
      <div className="col-auto">
        <input type="submit" value="Jerusalem" className="btn" />
      </div>
    </div>
  );
}
