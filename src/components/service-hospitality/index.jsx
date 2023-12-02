import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceArea from "./service-area";
import FeatureArea from "./feature-area";
import PricingArea from "./pricing-area";
import Footer from "@/src/layout/footers/footer";
import HosBreadcrumb from "@/src/common/breadcrumbs/beardcrumb-hos";

const HospitalityService = () => {
  return (
    <>
      <HeaderOne />
      <HosBreadcrumb title="Hospitality Hub" innertitle="Central space for seamless guest services and interactions" />
      <ServiceArea />
      <FeatureArea />
     
      <Footer />
    </>
  );
};

export default HospitalityService;
