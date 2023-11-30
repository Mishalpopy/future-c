import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import About from "../components/about";
import { useState } from "react";
import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";
const index = () => {
  
  return (
    <Wrapper>
      <SEO pageTitle={"About Us || Future Connect - Saudia Arabia"} />

      <About />
    </Wrapper>
  );
};

export default index;
