import React from "react";
import { useMissionsListQuery } from "../../generated/graphql";
import ErrorPage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";
import Missions from "./Missions";

const MissionsContainer = () => {
  const { data, loading, error } = useMissionsListQuery();

  if (loading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <div className="page-center">
      <Missions data={data} />
      <Footer />
    </div>
  );
};

export default MissionsContainer;
