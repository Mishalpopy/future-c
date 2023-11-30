import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import PowerChargingUSB from "../components/Power-Charging-&-USB";
import TravelAce from "../components/Travel-Accessories";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Travel Accessories || Future Connect - Saudia Arabia"} />
      <TravelAce />
    </Wrapper>
  );
};

export default index;
