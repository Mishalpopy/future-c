import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/it-&-low-current";
import DataDetails from "../components/data-center-network-security";
import AvDetails from "../components/audio-visual-systems";
import AudioVisualSystems from "../components/audio-visual-systems";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <AudioVisualSystems />
    </Wrapper>
  );
};

export default index;
