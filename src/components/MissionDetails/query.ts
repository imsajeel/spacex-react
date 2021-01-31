import gql from "graphql-tag";

export const QUERY_MISSION_DETAILS = gql`
  query missionDetails($id: String!) {
    mission(id: $id) {
      mission_id
      mission_name
      manufacturers
      payload_ids
      description
      website
      twitter
      wikipedia
    }
  }
`;
