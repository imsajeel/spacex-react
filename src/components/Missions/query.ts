import gql from "graphql-tag";

export const QUERY_MISSION = gql`
  query missionsList {
    missions {
      mission_id
      mission_name
      manufacturers
    }
  }
`;
