import { Fieldset } from "@geist-ui/react";
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
      <Fieldset style={{ maxWidth: "800px" }}>
        <Fieldset.Title>
          {launch?.mission_name} - {launch?.launch_year}
        </Fieldset.Title>
        <Fieldset.Subtitle>{launch?.details}</Fieldset.Subtitle>
      </Fieldset>
    </div>
  );
};

export default LaunchDetails;
