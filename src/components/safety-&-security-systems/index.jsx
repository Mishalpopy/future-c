import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";
import BreadcrumbDigital from "@/src/common/breadcrumbs/breadcrumbDigital";
import BreadcrumbSecurity from "@/src/common/breadcrumbs/breadcrumbSecurity";

const SaftyAndSecuritySystem = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbSecurity title="Safety & Security Systems" innertitle="Future Connect" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default SaftyAndSecuritySystem;
