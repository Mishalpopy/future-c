import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import DataDetails from "../components/data-center-network-security";
import DataCenterITInfrastructure from "../components/data-center-network-security";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Data Center & Network Security || Future Connect - KSA"} />
      <DataCenterITInfrastructure />
    </Wrapper>
  );
};

export default index;
