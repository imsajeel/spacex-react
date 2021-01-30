import gql from "graphql-tag";

export const QUERY_LAUNCHES = gql`
  query launchList {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`;
