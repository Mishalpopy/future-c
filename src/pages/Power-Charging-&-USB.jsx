import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import PowerChargingUSB from "../components/Power-Charging-&-USB";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Power Charging & USB || Future Connect - Saudia Arabia"} />
      <PowerChargingUSB />
    </Wrapper>
  );
};

export default index;
