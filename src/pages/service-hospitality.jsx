import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Service from '../components/service';
import ServiceArea from '../components/service-hospitality/service-area';
import HospitalityService from '../components/service-hospitality';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Hospitality Hub || Future Connect - Saudia Arabia"} />
            <HospitalityService />            
        </Wrapper>
    );
};

export default index;