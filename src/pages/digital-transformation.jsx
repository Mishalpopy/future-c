import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import DigitalTransformation from "../components/digital-transformation";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <DigitalTransformation />
    </Wrapper>
  );
};

export default index;
