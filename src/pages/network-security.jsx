import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import SecurityDetails from "../components/network-security";
import NetworkSecurity from "../components/network-security";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <NetworkSecurity />
    </Wrapper>
  );
};

export default index;
