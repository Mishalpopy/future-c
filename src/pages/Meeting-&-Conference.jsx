import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import PowerChargingUSB from "../components/Power-Charging-&-USB";
import WireLess from "../components/Wireless-Charging";
import MeetingCon from "../components/Meeting-&-Conference";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Meeting & Conference || Future Connect - Saudia Arabia"} />
      <MeetingCon />
    </Wrapper>
  );
};

export default index;
