import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";
import BreadcrumbDigital from "@/src/common/breadcrumbs/breadcrumbDigital";
import BreadcrumbData from "@/src/common/breadcrumbs/breadcrumbData";

const  DataCenterITInfrastructure = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbData title="Data Center & Network Security" innertitle="Future Connect" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default  DataCenterITInfrastructure;
