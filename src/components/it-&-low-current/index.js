import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";
import BreadcrumbDigital from "@/src/common/breadcrumbs/breadcrumbDigital";
import Breadcrumbitlow from "@/src/common/breadcrumbs/breadcrumbItlow";

const ItandlowDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumbitlow title="IT And Low Current" innertitle="Future Connect" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default ItandlowDetails;
