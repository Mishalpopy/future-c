import service_data from '@/src/data/service-data-hos';
import React from 'react';

const ServiceArea = () => {
    return (
        <>
           <div className="service-area pt-120 pb-55">
                <div className="container">
                    <div className="row">
                        {service_data.slice(10, 19).map((item, i)  => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="tpservices">
                                    <div className="tpservices__thumb">
                                        <div className="fix"><a href="#"><img src={item.img} alt="theme-pure" /></a></div>
                                    </div>
                                    <div className="tpservices__content">


                                        <h3 className="tpservices__title">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="tpservices__btn">
                                        <a className="tp-btn w-100" href={item.link}>Service Details <i className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>  
                        )} 
                    </div>
                </div>
            </div> 
        </>
    );
};

export default ServiceArea;