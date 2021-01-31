import React from "react";
import { useRocketListQuery } from "../../generated/graphql";
import ErrorPage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";
import Rockets from "./Rockets";

const RocketsContainer = () => {
  let { data, error, loading } = useRocketListQuery();

  if (loading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <div className="page-center">
      <Rockets data={data} />
      <Footer />
    </div>
  );
  // return <div>Hekko</div>;
};
export default RocketsContainer;
