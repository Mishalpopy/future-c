import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import PowerChargingUSB from "../components/Power-Charging-&-USB";
import MultimediaAudio from "../components/Multimedia-Audio-&-Charging";
import Combination from "../components/Combination-Power-&-Charging";
import AlarmClock from "../components/Alarm-Clocks-&-Audio";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <AlarmClock />
    </Wrapper>
  );
};

export default index;
