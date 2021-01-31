import { Loading, Text } from "@geist-ui/react";
import React from "react";

const LoadingPage = () => {
  return (
    <Text h3>
      <div className="page-center" style={{ paddingTop: "50px" }}>
        <Loading size="large">Data is loading</Loading>
      </div>
    </Text>
  );
};

export default LoadingPage;
