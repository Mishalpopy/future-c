import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";
import BreadcrumbDigital from "@/src/common/breadcrumbs/breadcrumbDigital";
import BreadcrumbPower from "@/src/common/breadcrumbs/breadcrumbPowerDigital";
import BreadcrumbMulti from "@/src/common/breadcrumbs/breadcrumbMulti";
import BreadcrumbCombi from "@/src/common/breadcrumbs/BreadcrumbCombi";
import BreadcrumbAlarm from "@/src/common/breadcrumbs/breadcrumbAlarm";

const AlarmClock = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbAlarm title="Safety & Security Systems" innertitle="Future Connect" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default AlarmClock;
