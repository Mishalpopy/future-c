import Link from 'next/link';
import React from 'react';


const fetures_content = {
    bg_img: "/assets/img/feature/feature-bg.jpg",
    subtitle: "features",
    title: "Elevate Your Enterprise with Cutting-Edge Solutions",
    fetures: [
        {icon: "/assets/img/services/digitals.svg", title: "Seamless Connectivity"},
        {icon: "/assets/img/services/it.svg", title: "Optimal Business Performance"},
        {icon: "/assets/img/services/cctv.svg", title: "Secure Environments"},
        {icon: "/assets/img/services/data.svg", title: "Digital Excellence Foundations"},
        {icon: "/assets/img/services/network.svg", title: "Digital Landscape Protection"},
        {icon: "/assets/img/services/audi2.svg", title: "Unmatched Audio-Visual Experiences"},

    ]
    
}
const {bg_img, subtitle, title, fetures}  = fetures_content


const FeatureArea = () => {
    return (
        <>
            <div className="feature-third-area feature-bg-img pt-110 pb-110" style={{backgroundImage: `url(${bg_img})`}}>
                <div className="container">
                    <div className="row justify-content-lg-end">
                        <div className="col-xxl-6 col-xl-7 col-lg-8">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                            <span className="tp-section-subtitle d-inline-block right mb-10">{subtitle}</span>
                            <h2 className="tp-section-title">
                                {title}
                            </h2>
                        </div>
                        <div className="row">
                            {fetures.map((item, i)  => 
                                <div key={i} className="col-lg-6 col-md-6">
                                    <div className="fea-list d-flex align-items-center mb-30">
                                        <img src={item.icon} width={30}></img>
                                        <div className="fea-ctn pl-20">
                                        <h5 className="m-0">{item.title}</h5>
                                        </div>
                                    </div>
                                </div>   
                            )} 
                            <div className="fea-button pt-20">
                                <Link className="tp-btn mr-25" href="/contact">Get In Touch <i className="fal fa-long-arrow-right"></i></Link>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureArea;