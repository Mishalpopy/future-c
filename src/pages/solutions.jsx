import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Service from '../components/solutions';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Solutions || Future Connect - Saudia Arabia"} />
            <Service />            
        </Wrapper>
    );
};

export default index;