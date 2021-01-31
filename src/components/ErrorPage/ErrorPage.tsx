import React from "react";
import { AlertTriangle } from "@geist-ui/react-icons";

const ErrorPage = () => {
  return (
    <div className="page-center" style={{ paddingTop: "50px" }}>
      <AlertTriangle size={100} />
      {/* <br /> */}
      There was an error.
    </div>
  );
};

export default ErrorPage;
