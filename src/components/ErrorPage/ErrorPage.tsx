import React from "react";
import { AlertTriangle } from "@geist-ui/react-icons";

const ErrorPage = () => {
  return (
    <div className="page-center" style={{ paddingTop: "50px", color: "gray" }}>
      <AlertTriangle size={100} />
      {navigator.onLine ? (
        <>
          <b>ERROR: </b> Something went wrong.
        </>
      ) : (
        <>
          <b>Network Error: </b> Please check your connection.
        </>
      )}
    </div>
  );
};

export default ErrorPage;
