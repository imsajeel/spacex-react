import { Card, Spacer, Table } from "@geist-ui/react";
import YouTube from "react-youtube";
import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import { CheckInCircle, XCircle } from "@geist-ui/react-icons";

interface Props {
  data: LaunchInfoQuery;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  const { launch } = data;

  const tableData = [
    { label: "Flight number", value: launch?.flight_number },
    { label: "Launch site", value: launch?.launch_site?.site_name },
    {
      label: "Launch success",
      value: () => {
        if (launch?.launch_success) {
          return <CheckInCircle size="1.2rem" />;
        } else {
          return <XCircle size="1.2rem" />;
        }
      },
    },
    { label: "Launch year", value: launch?.launch_year },
    { label: "Rocket name", value: launch?.rocket?.rocket_name },
    { label: "Rocket type", value: launch?.rocket?.rocket_type },
  ];

  return (
    <div style={{ margin: "10px", maxWidth: "100vw", overflow: "hidden" }}>
      <h3 style={{ margin: "5vh 0px", textAlign: "center" }}>Launch Details</h3>
      <Card style={{ maxWidth: "800px" }}>
        <h4>
          {launch?.mission_name} - {launch?.launch_year}
        </h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap-reverse",
            marginTop: "40px",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Table data={tableData} style={{ maxWidth: "300px" }}>
            <Table.Column prop="label" label="Label" />
            <Table.Column prop="value" label="Information" />
          </Table>
          <Spacer y={5} x={2} />
          <div
            style={{
              maxWidth: "250px",
              maxHeight: "250px",
              margin: "0px 10px 10px 0px",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            {!!launch?.links?.flickr_images && (
              <img
                src={
                  launch?.links?.flickr_images[0]
                    ? launch?.links?.flickr_images[0].toString()
                    : "https://paganresearch.io/images/SpaceX.jpg"
                }
                alt={launch?.mission_name?.toString()}
              />
            )}
          </div>
        </div>
        <p>{launch?.details}</p>
        <div style={{ margin: "50px 10px" }}>
          {!!launch?.links?.video_link && (
            <VideoLink url={launch?.links?.video_link} />
          )}
        </div>

        {!!launch?.links?.flickr_images && (
          <>
            <h3 style={{ textAlign: "center" }}>Images</h3>
            {launch.links.flickr_images.map((image, i) => {
              if (image) {
                return (
                  <div key={i}>
                    <img src={image} alt={image} />
                  </div>
                );
              } else {
                return <h3>No Image Found</h3>;
              }
            })}
          </>
        )}
      </Card>
    </div>
  );
};

const VideoLink = ({ url }: { url: any }) => {
  var ID = "";
  url = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <YouTube videoId={ID} className="youtube-container" />
    </div>
  );
};

export default LaunchDetails;
