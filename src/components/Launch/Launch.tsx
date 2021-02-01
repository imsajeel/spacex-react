import React, { Suspense } from "react";
import { LaunchListQuery } from "../../generated/graphql";
import { Link as RouterLink } from "react-router-dom";
import { Card, Text } from "@geist-ui/react";
import MyImageComponent from "../MyImageComponent/MyImageComponent";
import LoadingImage from "../MyImageComponent/LoadingBox";

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
                  <Suspense fallback={<LoadingImage />}>
                    <CustomImage images={launch.links?.flickr_images} />
                  </Suspense>
                  <Text h4 style={{ marginBottom: "0" }}>
                    {launch.mission_name}
                  </Text>
                  <Text type="secondary" small>
                    Flight Number: {launch.flight_number} ~ {launch.launch_year}
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
  if (images.length > 0) {
    return (
      <MyImageComponent
        src={images[0]}
        // height={250}
        // width={250}
        alt={"cover of mission"}
        style={{ objectFit: "cover", height: "250px" }}
      />
    );
  } else {
    return (
      <MyImageComponent
        src={NOIMAGE}
        // height={250}
        // width={250}
        alt={"cover of mission"}
        style={{ objectFit: "cover", height: "250px" }}
      />
    );
  }
};
export default Launch;
