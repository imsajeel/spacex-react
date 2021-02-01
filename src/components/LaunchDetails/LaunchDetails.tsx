import { Card } from "@geist-ui/react";
import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";

interface Props {
  data: LaunchInfoQuery;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  console.log("Launch Details", data);

  const { launch } = data;

  return (
    <div style={{ margin: "10px" }}>
      <h3 style={{ margin: "5vh 0px", textAlign: "center" }}>Launch Details</h3>
      <Card style={{ maxWidth: "800px" }}>
        <h4>
          {launch?.mission_name} - {launch?.launch_year}
        </h4>
        <p>{launch?.details}</p>
      </Card>
    </div>
  );
};

export default LaunchDetails;
