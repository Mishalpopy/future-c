import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Faq from "../components/faq";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - KSA"} />
      <Faq />
    </Wrapper>
  );
};

export default index;
