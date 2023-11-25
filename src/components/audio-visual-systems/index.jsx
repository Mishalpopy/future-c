import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";
import BreadcrumbDigital from "@/src/common/breadcrumbs/breadcrumbDigital";
import BreadcrumbAudio from "@/src/common/breadcrumbs/breadcrumbAudio";

const AudioVisualSystems = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbAudio title="Audio Visual Systems" innertitle="Future Connect" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default AudioVisualSystems;
