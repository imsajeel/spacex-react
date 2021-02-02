import gql from "graphql-tag";

export const QUERY_LAUNCHES = gql`
  query launchList {
    launches(limit: 10, order: desc, range: past) {
      flight_number
      mission_name
      launch_year
      launch_success
      links {
        flickr_images
      }
    }
  }
`;
