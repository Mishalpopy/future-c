import Link from 'next/link';
import React from 'react';

const BreadcrumbContact = ({title="About" , innertitle="Transforming the Future" }) => {
    return (
        <>
            <section className="breadcrumb__area include-bg pt-150 pb-120" 
                  style={{background: `linear-gradient(#f7f7f71c, #19875469),url(/assets/img/breadcrumb/con-slider.jpg) center/cover`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                        <div className="breadcrumb__content p-relative z-index-1 pt-60">
                            <div className="breadcrumb__list">
                                <span><Link href="/">Home </Link></span>
                                <span className="dvdr"><i className="flaticon-arrow-right"></i></span>
                                <span>{title}</span>
                            </div>
                            <h5 className="breadcrumb__title">Connect Future with<br></br> Future Connect<p></p> </h5>
                        </div>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    );
};

export default BreadcrumbContact;