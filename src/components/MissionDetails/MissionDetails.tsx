import { Button, Fieldset, Text } from "@geist-ui/react";
import React from "react";
import { MissionDetailsQuery } from "../../generated/graphql";

interface Props {
  data: MissionDetailsQuery;
}
const MissionDetails: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ margin: "10px" }}>
      <h3 style={{ margin: "5vh 0px", textAlign: "center" }}>
        Mission Details
      </h3>
      <Fieldset style={{ maxWidth: "800px" }}>
        <Fieldset.Title>{data.mission?.mission_name}</Fieldset.Title>
        <Fieldset.Subtitle>
          {data.mission?.description}
          <div style={{ marginTop: "20px", display: "flex" }}>
            <Text b>Manufacturers: </Text>
            <div style={{ margin: "5px" }}>
              {!!data.mission?.manufacturers &&
                data.mission.manufacturers.map((manufacturer, i) => {
                  return <Text key={i}>{manufacturer}</Text>;
                })}
            </div>
          </div>

          <div style={{ marginTop: "20px", display: "flex" }}>
            <Text b>Payloads: </Text>
            <div style={{ margin: "5px" }}>
              {!!data.mission?.payload_ids &&
                data.mission.payload_ids.map((payload, i) => {
                  return <Text key={i}>{payload}</Text>;
                })}
            </div>
          </div>
        </Fieldset.Subtitle>
        <Fieldset.Footer>
          <Fieldset.Footer.Status>
            Links for more information
          </Fieldset.Footer.Status>
          <Fieldset.Footer.Actions>
            {!!data.mission?.website && (
              <Button
                onClick={() => openInNewTab(data.mission?.website || "")}
                auto
                size="mini"
                style={{ margin: "0px 5px" }}
              >
                Website
              </Button>
            )}
            {!!data.mission?.twitter && (
              <Button
                onClick={() => openInNewTab(data.mission?.twitter || "")}
                auto
                size="mini"
                style={{ margin: "0px 5px" }}
              >
                Twitter
              </Button>
            )}
            {!!data.mission?.wikipedia && (
              <Button
                onClick={() => openInNewTab(data.mission?.wikipedia || "")}
                auto
                size="mini"
                style={{ margin: "0px 5px" }}
              >
                Wikipedia
              </Button>
            )}
          </Fieldset.Footer.Actions>
        </Fieldset.Footer>
      </Fieldset>
    </div>
  );
};

const openInNewTab = (url: string) => {
  window.open(url, "_blank");
};

export default MissionDetails;
