import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Shop from "../components/shop";
import Terms from "../components/terms";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Terms & Condition || Future Connect - KSA"} />
      <Terms />
    </Wrapper>
  );
};

export default index;
