import { Table } from "@geist-ui/react";
import React from "react";
import { MissionsListQuery } from "../../generated/graphql";
import { useHistory } from "react-router-dom";

interface Props {
  data: MissionsListQuery;
}

const Missions: React.FC<Props> = ({ data }) => {
  const history = useHistory();

  const operation = (row: any) => {
    history.push(`/mission/${row.mission_id}`);
  };

  const modifiedData = data?.missions;

  return (
    <div>
      <h3 style={{ margin: "5vh 0px", textAlign: "center" }}>
        SpaceX Missions
      </h3>
      <Table data={modifiedData || []} onRow={operation}>
        <Table.Column prop="mission_id" label="mission id" />
        <Table.Column prop="mission_name" label="mission name" />
        <Table.Column prop="manufacturers" label="manufacturers" />
      </Table>
    </div>
  );
};

export default Missions;
