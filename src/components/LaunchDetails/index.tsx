import React from "react";
import { useParams } from "react-router-dom";
import { useLaunchInfoQuery } from "../../generated/graphql";
import ErrorPage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";
import LaunchDetails from "./LaunchDetails";

const LaunchDetailsContainer = () => {
  const { id }: { id: string } = useParams();

  const { data, error, loading } = useLaunchInfoQuery({
    variables: { id: id },
  });

  if (loading) {
    return <LoadingPage />;
  }
  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <div className="page-center">
      <LaunchDetails data={data} />
      <Footer />
    </div>
  );
};

export default LaunchDetailsContainer;
