import React from "react";
import { useParams } from "react-router-dom";
import { useLaunchInfoQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetails";

const LaunchDetailsContainer = () => {
  const { id }: { id: string } = useParams();

  const { data, error, loading } = useLaunchInfoQuery({
    variables: { id: id },
  });

  if (loading) {
    return <div>Data is loading.</div>;
  }
  if (error || !data) {
    return <div>There was an error.</div>;
  }

  return <LaunchDetails data={data} />;
};

export default LaunchDetailsContainer;
