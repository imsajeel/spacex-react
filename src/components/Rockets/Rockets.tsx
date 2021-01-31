import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, Image, Text } from "@geist-ui/react";
import { RocketListQuery } from "../../generated/graphql";

interface Props {
  data: RocketListQuery;
}

const NOIMAGE = "https://paganresearch.io/images/SpaceX.jpg";

const Rockets: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h3 style={{ margin: "5vh 0px", textAlign: "center" }}>SpaceX Rockets</h3>
      <div className="flex-wrap">
        {!!data.rockets &&
          data.rockets.map(
            (rocket, i) =>
              !!rocket && (
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
                  <CustomImage images={rocket?.flickr_images} />
                  <Text h4 style={{ marginBottom: "0" }}>
                    {rocket.rocket_name}
                  </Text>
                  <Text type="secondary" small>
                    First flight: {rocket.first_flight}
                  </Text>
                  <Card.Footer>
                    <RouterLink to={`/rocket/${rocket.id}`}>
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

export default Rockets;
