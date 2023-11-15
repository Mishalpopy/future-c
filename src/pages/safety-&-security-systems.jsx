import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import SafetyDetails from "../components/safety-&-security-systems";
import SaftyAndSecuritySystem from "../components/safety-&-security-systems";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <SaftyAndSecuritySystem />
    </Wrapper>
  );
};

export default index;
