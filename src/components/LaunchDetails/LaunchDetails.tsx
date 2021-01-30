import { Text } from "@geist-ui/react";
import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";

interface Props {
  data: LaunchInfoQuery;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  console.log("Launch Details", data);

  const { launch } = data;

  return (
    <div>
      <Text h3>{launch?.mission_name}</Text>
      {launch?.links?.flickr_images?.length ? (
        <div>
          <img
            src={launch?.links?.flickr_images[0] || ""}
            alt={launch?.mission_name || ""}
          />
        </div>
      ) : (
        ""
      )}
      <Text p>{launch?.details}</Text>
    </div>
  );
};

export default LaunchDetails;
