import React from "react";
import { LaunchListQuery } from "../../generated/graphql";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  data: LaunchListQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
  return (
    <div className="Launches" style={{ margin: "0px 40px" }}>
      <h3>All SpaceX Launches</h3>
      <ol className="LaunchesOL">
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <RouterLink to={`/launch/${launch.flight_number}`}>
                  <li key={i} className="LaunchesItem">
                    {launch.mission_name} - {launch.launch_year}
                  </li>
                </RouterLink>
              )
          )}
      </ol>
    </div>
  );
};

export default Launch;
