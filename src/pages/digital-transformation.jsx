import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/digital-transformation";
import Wrapper from "../layout/wrapper";
import DigitalTransformation from "../components/digital-transformation";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Digital Transformation || Future Connect - KSA"} />
      <DigitalTransformation />
    </Wrapper>
  );
};

export default index;
