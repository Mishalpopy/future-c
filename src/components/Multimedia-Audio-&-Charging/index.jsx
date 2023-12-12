import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";
import BreadcrumbDigital from "@/src/common/breadcrumbs/breadcrumbDigital";
import BreadcrumbPower from "@/src/common/breadcrumbs/breadcrumbPowerDigital";
import BreadcrumbMulti from "@/src/common/breadcrumbs/breadcrumbMulti";

const MultimediaAudio = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbMulti title="Multimedia Audio & Charging" innertitle="Future Connect" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default MultimediaAudio;
