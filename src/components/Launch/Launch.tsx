import React from "react";
import { LaunchListQuery } from "../../generated/graphql";
import { Link as RouterLink } from "react-router-dom";
import { Card, Image, Text } from "@geist-ui/react";

interface Props {
  data: LaunchListQuery;
}

const NOIMAGE = "https://paganresearch.io/images/SpaceX.jpg";

const Launch: React.FC<Props> = ({ data }) => {
  return (
    <div className="Launches">
      <h3 style={{ margin: "5vh 0px", textAlign: "center" }}>
        SpaceX Recent Launches
      </h3>
      <div className="flex-wrap">
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <Card
                  key={i}
                  style={{ minHeight: "250px", margin: "10px" }}
                  width="250px"
                  shadow
                >
                  {/* <Image
                    src={
                      !!launch?.links?.flickr_images[0]
                        ? launch.links?.flickr_images[0]
                        : noImage
                    }
                    style={{ objectFit: "cover", height: "250px" }}
                  /> */}
                  <CustomImage images={launch.links?.flickr_images} />
                  <Text h4 style={{ marginBottom: "0" }}>
                    {launch.mission_name}
                  </Text>
                  <Text type="secondary" small>
                    {launch.launch_year}
                  </Text>
                  <Card.Footer>
                    <RouterLink to={`/launch/${launch.flight_number}`}>
                      View Details
                    </RouterLink>
                  </Card.Footer>
                </Card>
              )
          )}
      </div>
    </div>
  );
};

const CustomImage = ({ images }: any) => {
  return (
    <Image
      src={images[0] ? images[0] : NOIMAGE}
      // height={250}
      // width={250}
      style={{ objectFit: "cover", height: "250px" }}
    />
  );
};
export default Launch;
