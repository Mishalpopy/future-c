import Link from 'next/link';
import React from 'react';



const service_content = {
   service_data : [
      {
         id: 1,
         tab_id:"nav-camera",
         active: "show active",
         aria_labelledby: "nav-camera-tab",
         img: "/assets/img/services/sv-7.jpg",
        
         title: "Digital Transformation",
         description: <>Welcome to Future Connect, your gateway to cutting-edge Digital Transformation Solutions. Explore our diverse range of services designed to revolutionize the way you do business.</>,
         fetures: [
            "Seamless Communication",
            "Mobility and Flexibility",
            "Robust Security",
            "Collaboration Tools",
            "Streamlined Workflow",
         ]
      },
      {
         id: 2,
         tab_id:"nav-cctv",
         active: "",
         aria_labelledby: "IT & Low Current",
         img: "/assets/img/services/itLow.jpg",
         price: "35",
         title: "IT & Low Current",
         description: <>Welcome to the future of connectivity and control with our innovative range of solutions at Future Connect. Explore the seamless integration of technology into various aspects of your environment, designed to elevate efficiency and simplify operations effortlessly.</>,
         fetures: [
            "Seamless Integration",
            "Efficiency and Innovation",
            "Simplified Operations",
            "Connecting Tomorrow, Today",

         ]
      },
      {
         id: 3,
         tab_id:"nav-security",
         active: "",
         aria_labelledby: "nav-security-tab",
         img: "/assets/img/services/sercurity.jpg",
         price: "45",
         title: "Safety & Security Systems",
         description: <>Services encompass Physical Security Solutions such as CCTV, Site Monitoring, Access Control, and Gate Barriers, as well as Fire Detection, Public Address/Voice Evacuation, Firefighting, and Control Room Setups.</>,
         fetures: [
            "Prioritizing Asset Protection",
            "Expert Implementation",
            "Strategic Collaboration",
            "Skilled Workforce",

         ]
      },
      {
         id: 4,
         tab_id:"nav-data",
         active: "",
         aria_labelledby: "nav-data-tab",
         img: "/assets/img/services/dataCen.jpg",
         price: "42",
         title: "DATA CENTER & NETWORK SECURITY",
         description: <>Unlock the potential of your business with our comprehensive Data Center & Network Security services. At Future Connect, we offer a suite of cutting-edge solutions designed to propel your network infrastructure into the future. </>,
         fetures: [
            "Cutting-Edge Digital Signage",
            "Innovative Development Services",
            "Customized Application Development",
            "Data Security and Compliance",
            "Business Intelligence and ERP Solutions",
         ]
      },

      {
         id: 6,
         tab_id:"nav-audio",
         active: "",
         aria_labelledby: "nav-audio-tab",
         img: "/assets/img/services/audio.jpg",
         price: "42",
         title: "Digital Transformation and Development",
         description: <>Services include Digital Signage Solutions, Queuing Systems, Smart Boards, and Digital Archiving for a smoother digital transition.</>,
         fetures: [
            "Cutting-Edge Digital Signage",
            "Innovative Development Services",
            "Customized Application Development",
            "Data Security and Compliance",
            "Business Intelligence and ERP Solutions",
         ]
      },
   ]
} 
const {service_data}  = service_content


const ServiceArea = () => {
    return (
        <>
   <div className="service-area">
      <div className="service-tab-bg pt-60" style={{backgroundImage: `url(/assets/img/services/tab-bg.jpg)`}}>
         <div className="container">
               <div className="tp-section-box tp-section-box-2 p-relative mb-45 text-center">
                  <span className="tp-section-subtitle d-inline-block pre mb-10">services</span>
                  <h2 className="tp-section-title">
                     What We Provide
                  </h2>
               </div>
               <div className="service-tab-info">
                  <nav>
                     <div className="nav tp-service-tab justify-content-center mb-35" id="nav-tab" role="tablist">
                        <button className="nav-links active" id="nav-camera-tab" data-bs-toggle="tab" data-bs-target="#nav-camera"
                           type="button" role="tab" aria-controls="nav-camera" aria-selected="false">Digital Transformation</button>

                        <button className="nav-links" id="nav-cctv-tab" data-bs-toggle="tab" data-bs-target="#nav-cctv"
                           type="button" role="tab" aria-controls="nav-cctv" aria-selected="false">IT & Low Current</button>

                        <button className="nav-links" id="nav-security-tab" data-bs-toggle="tab" data-bs-target="#nav-security"
                           type="button" role="tab" aria-controls="nav-security" aria-selected="false">Safety & Security Systems</button>

                        <button className="nav-links" id="nav-data-tab" data-bs-toggle="tab" data-bs-target="#nav-data"
                           type="button" role="tab" aria-controls="nav-cyber" aria-selected="false">Data Center & IT Infrastructure</button>
                          
                            <button className="nav-links" id="audio-visual" data-bs-toggle="tab" data-bs-target="#nav-audio"
                           type="button" role="tab" aria-controls="nav-cyber" aria-selected="false">Audio Visual Systems</button>
                     </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                     {service_data.map((item, i)  => 
                        <div key={i} className={`tab-pane fade ${item.active}`} id={item.tab_id} role="tabpanel" aria-labelledby={item.aria_labelledby}
                              tabIndex="0">
                              <div className="slider-tab-main white-bg">
                                 <div className="row">
                                    <div className="col-lg-5 col-12 sv-tab-img">
                                       <div className="tp-service-tab-img">
                                          <img src={item.img} alt="theme-pure" />
                                       </div>
                                    </div>
                                    <div className="col-lg-7 col-12 sv-tab-content">
                                       <div className="tp-service-tab-content pt-30 pl-25">
                                          <div className="tab-circle">
                                            
                                             <h3 className="sv-tab-titile">{item.title}</h3>
                                             <p>{item.description}</p>
                                          </div>
                                          <div className="tp-sv-feature-list mb-40">
                                             <ul>
                                                {item.fetures.map((feture, index) => 
                                                   <li key={index}><i className="fal fa-check"></i>{feture}</li>                                                
                                                )} 
                                             </ul>
                                          </div>
                                          <div className="services-tab-btn">
                                             <Link href="/services" className="tp-btn">Read More</Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>                     
                     )} 

                  </div>
               </div>
         </div>
      </div>
   </div>
        </>
    );
};

export default ServiceArea;