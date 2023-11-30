import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Contact from '../components/contact-us';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Contact Us || Future Connect - KSA"} />
            <Contact />            
        </Wrapper>
    );
};

export default index;