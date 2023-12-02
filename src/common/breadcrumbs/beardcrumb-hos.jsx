import Link from 'next/link';
import React from 'react';

const HosBreadcrumb = ({title="Hospitality Hub" , innertitle="Central space for seamless guest services and interactions" }) => {
    return (
        <>
            <section className="breadcrumb__area include-bg pt-150 pb-150" 
                  style={{backgroundImage: `url(/assets/img/breadcrumb/solution.jpg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                        <div className="breadcrumb__content p-relative z-index-1">
                            <div className="breadcrumb__list">
                                <span><Link href="/">Home </Link></span>
                                <span className="dvdr"><i className="flaticon-arrow-right"></i></span>
                                <span>{title}</span>
                            </div>
                            <h5 className="breadcrumb__title">Central space for seamless guest <br></br> services and interactions</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    );
};

export default HosBreadcrumb;