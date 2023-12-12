import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import PowerChargingUSB from "../components/Power-Charging-&-USB";
import WireLess from "../components/Wireless-Charging";
import Virtual from "../components/Virtual-Reception-Kiosk";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Virtual reception kiosk || Future Connect - Saudia Arabia"} />
      <Virtual />
    </Wrapper>
  );
};

export default index;
