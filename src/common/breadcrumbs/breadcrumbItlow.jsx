import Link from 'next/link';
import React from 'react';

const Breadcrumbitlow = ({title=" Future-Proof Network Solutions" , innertitle="Transforming the Future" }) => {
    return (
        <>
            <section className="breadcrumb__area include-bg pt-200 pb-200" 
                  style={{backgroundImage: `url(/assets/img/breadcrumb/itLow.jpg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                        <div className="breadcrumb__content p-relative z-index-1">
                            <div className="breadcrumb__list">
                                <span><Link href="/">Home </Link></span>
                                <span className="dvdr"><i className="flaticon-arrow-right"></i></span>
                                <span>{title}</span>
                            </div>
                            <h5 className="breadcrumb__title">Future Connect: <br></br>Elevating Connectivity and Control</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    );
};

export default Breadcrumbitlow;