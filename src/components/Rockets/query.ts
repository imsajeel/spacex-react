import gql from "graphql-tag";

export const QUERY_ROCKETS = gql`
  query rocketList {
    rockets {
      id
      rocket_name
      first_flight
      flickr_images
    }
  }
`;
