import { Card, Table } from "@geist-ui/react";
import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";

interface Props {
  data: LaunchInfoQuery;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  console.log("Launch Details", data);

  const { launch } = data;

  const tableData = [
    { label: "Flight number", value: launch?.flight_number },
    { label: "Launch site", value: launch?.launch_site?.site_name },
    { label: "Launch success", value: `${launch?.launch_success}` },
    { label: "Launch year", value: launch?.launch_year },
  ];

  return (
    <div style={{ margin: "10px" }}>
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
          }}
        >
          <Table data={tableData} style={{ maxWidth: "300px" }}>
            <Table.Column prop="label" label="Label" />
            <Table.Column prop="value" label="Value" />
          </Table>
          {!!launch?.links?.flickr_images && (
            <div
              style={{
                maxWidth: "250px",
                maxHeight: "250px",
                margin: "0px 10px 10px auto",
                marginLeft: "auto",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <img
                src={launch?.links?.flickr_images.toString()}
                alt={launch.mission_name?.toString()}
              />
            </div>
          )}
        </div>
        <p>{launch?.details}</p>
      </Card>
    </div>
  );
};

export default LaunchDetails;
