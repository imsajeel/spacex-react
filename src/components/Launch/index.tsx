import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import ErrorPage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";
import Launch from "./Launch";

const LaunchContainer = () => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <LoadingPage />;
  }
  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <div className="page-center">
      <Launch data={data} />
      <Footer />
    </div>
  );
};

export default LaunchContainer;
