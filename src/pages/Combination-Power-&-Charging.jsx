import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import PowerChargingUSB from "../components/Power-Charging-&-USB";
import MultimediaAudio from "../components/Multimedia-Audio-&-Charging";
import Combination from "../components/Combination-Power-&-Charging";

const index = () => {
  return (
    <Wrapper>
     <SEO pageTitle={"Combination Power & Charging || Future Connect - KSA"} />
      <Combination />
    </Wrapper>
  );
};

export default index;
