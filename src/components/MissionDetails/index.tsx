import React from "react";
import { useParams } from "react-router-dom";
import { useMissionDetailsQuery } from "../../generated/graphql";
import ErrorPage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";
import MissionDetails from "./MissionDetails";

const MissionDetailsContainer = () => {
  const { id }: any = useParams();
  const { data, loading, error } = useMissionDetailsQuery({
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
      <MissionDetails data={data} />
      <Footer />
    </div>
  );
};

export default MissionDetailsContainer;
