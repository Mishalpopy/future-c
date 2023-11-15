import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import DataDetails from "../components/data-center-&-it-infrastructure";
import DataCenterITInfrastructure from "../components/data-center-&-it-infrastructure";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <DataCenterITInfrastructure />
    </Wrapper>
  );
};

export default index;
