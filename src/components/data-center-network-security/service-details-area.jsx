import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrDocumentConfig } from 'react-icons/gr';
import { AiOutlineSolution,AiOutlineSync,AiOutlineFileProtect } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { PiPresentationChartBold } from 'react-icons/pi';RiCustomerService2Line
import { MdNetworkLocked,MdPower,MdBatteryAlert,MdInventory2,MdOutlineWorkspaces,MdComputer,MdVideoStable,MdOutlineSurroundSound } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { BsFillPeopleFill,BsFingerprint,BsPersonVideo3,BsFillClockFill,BsFillShieldFill,BsFillLightbulbFill } from 'react-icons/bs';
import { BiLinkExternal,BiSolidMobileVibration,BiSolidCctv,BiNetworkChart } from 'react-icons/bi';
import { SiGooglemeet,SiOpenaccess,SiIntercom } from 'react-icons/si';

import { FaSatelliteDish } from 'react-icons/fa';
import { GiCoolSpices } from 'react-icons/gi';



const service_details_content = {
    img: "/assets/img/breadcrumb/data.jpg",
    title: "Solutions Overview",
    info_1: <>Unlock the potential of your business with our comprehensive Data Center & Network Security services. At Future Connect, we offer a suite of cutting-edge solutions designed to propel your network infrastructure into the future. From efficient data flow management and seamless wireless connectivity to robust server environments and secure cloud solutions, we've got your network needs covered.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
             icon: "/assets/img/data/switch.svg",
     title: "Switching",
     info: "Efficiently manage data flow with our Switching/Routing solutions. Optimize network performance effortlessly."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
                icon: "/assets/img/data/lan.svg",
     title: "Wireless LAN",
     info: "Experience seamless connectivity with our Wireless LAN solutions. Enjoy high-speed and reliable wireless networks effortlessly.",
    },
    {id: 3,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/data/data.svg",
     title: "Data Centers",
    info: "Power your business with our Data Centers. Ensure secure and efficient data storage and management effortlessly."},
    {id: 4,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/data/cable.svg",
     title: "Structured Cabling",
    info: "Establish a reliable network foundation with our Structured Cabling solutions. Enhance connectivity effortlessly."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
               icon: "/assets/img/data/server.svg",
     title: "Server",
    info:"Fuel your operations with our Server solutions. Ensure a robust and responsive computing environment effortlessly."},
   
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
               icon: "/assets/img/data/storage.svg",
     title: "Storage",
    info:"Efficiently manage and secure data with our Storage solutions. Optimize storage capacity effortlessly."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
               icon: "/assets/img/data/cloud.svg",
     title: "Cloud",
    info:"Embrace the power of the cloud with our Cloud solutions. Scale and innovate effortlessly."},
   
],
over_veiw_list_two: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BsFingerprint />,
     title: "BioSecure Access",
     info: "Ensure secure access with BioSecure Access—a range of advanced Biometric Devices."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BiLinkExternal />,
     title: "AccessLink Accessories",
     info: "Enhance access control with AccessLink Accessories, providing additional features for comprehensive security.",
    },
    {id: 3,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BsPersonVideo3 />,
     title: "VisualHarmony AV Systems",
    info: "Elevate communication and collaboration with VisualHarmony AV Systems—offering top-notch Audio-Visual solutions."},
    {id: 4,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <AiOutlineSync />,
     title: "SignaSync Digital Solutions",
    info: "Captivate your audience with SignaSync Digital Solutions—providing Digital Signage, Video Wall, Interactive Screens, and Vertical Signage Kiosks for immersive experiences."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <AiOutlineFileProtect />,
     title: "GateGuard Pro",
    info:"Ensure controlled access with GateGuard Pro—a range of Gate Barriers, Bollards, Speed Gates, and Turnstiles."},
    {id: 7,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BiSolidCctv />,
     title: "CCTV WatchGuard ",
    info:"Enhance security surveillance with CCTV WatchGuard—providing advanced CCTV solutions for comprehensive monitoring."},
    {id: 8,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <SiGooglemeet />,
     title: "MeetMinder Scheduler",
    info:"Optimize your meeting spaces with MeetMinder Scheduler—an intelligent Meeting Room Scheduler/Solution."},
    {id: 9,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BiNetworkChart />,
     title: "ConnectSwitch Solutions",
    info:"Ensure robust network connectivity with ConnectSwitch Solutions—offering high-quality Switches & Access Points for seamless communication."},

],
    
    overview: <>Ensure secure access, enhance control, and elevate communication with our range of hardware solutions, including BioSecure Access, AccessLink Accessories, VisualHarmony AV Systems, SignaSync Digital Solutions, GateGuard Pro, CCTV WatchGuard, MeetMinder Scheduler, and ConnectSwitch Solutions.</>,

    overview_features: [
        {
            id: 1, 
            features: [
                "Enhanced Online Visibility: Stand out in the digital crowd with a strong online presence.",
                "Targeted Advertising: Reach the right audience with precision and efficiency.",
                "Boost brand recognition and customer engagement.",

            ],
        },
        {
            id: 2, 
            features: [
                "Improved User Experience: Create a user-friendly online environment that ensures customer satisfaction.", 
                "Data-Driven Strategies: Benefit from data-backed strategies that provide measurable results.", 
            ],
        },
    ],

    bottom_info_title: "IT Infrastructure Solutions",
    bottom_info: <>At Future Connect, we are committed to delivering state-of-the-art solutions that empower your business, ensuring you stay ahead in the dynamic world of data and network security. Partner with us for a future-proof network infrastructure that fuels growth and innovation.</>,

    service: [
        { id: 1, icon: "/assets/img/digital-service/software.svg", title: "Digital Transformation", link: "/digital-transformation" },
        { id: 2, icon: "/assets/img/digital-service/low.svg", title: "IT & LOW CURRENT", link: "/it-&-low-current" },
        { id: 3, icon: "/assets/img/digital-service/safery.svg", title: "SAFETY & SECURITY SYSTEMS",link: "/safety-&-security-systems" },
        { id: 4, icon: "/assets/img/digital-service/data.svg", title: "DATA CENTER & NETWORK SECURITY",link: "/data-center-network-security" },
        { id: 6, icon: "/assets/img/digital-service/audio.svg", title: "AUDIO VIDEO SYSTEMS",link: "/audio-video-systems" },
    ],


    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Company Profile"},
        {id: 2, icon: "fas fa-file-image", title: "Service Details"},
        
    ]


}
const {img , title, info_1, info_2, over_veiw_list, overview, overview_features, bottom_info_title, bottom_info, service , materials,over_veiw_list_two}  = service_details_content


const ServiceDetailsArea = () => {
    return (
        <>
            <div className="tp-service-details-area pt-115 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                        <div className="tp-service-overveiw-area mr-20">
                            <img className="w-100" src={img} alt="theme-pure" />
                            <div className="tp-overview-details">
                                <h2 className="overview-title">{title}</h2>
                                <p>{info_1}</p>
                                    <p>{info_2}</p>
                                <div className="row over-veiw-list counter-row">
                                    {over_veiw_list.map((item, i) => 
                                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="tp-over-view-item mb-30">
                                            <img className="w-3" width={60} src={item.icon} alt="theme-pure" />                                                <h5>{item.title}</h5>
                                                <p>{item.info}</p>
                                            </div>
                                        </div>                                    
                                    )} 
                                </div>
                                <div className="tp-overview-fea-list">
                                

                                    <div className="tp-bottom-info pt-20">
                                      
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="tp-sidebar-widget">
                            <h4 className="tp-widget-title">Our Solutions</h4>
                            <div className="tp-widget-item">
                            <ul>
                                    {service.map((item, i) => 
                                        <li key={i}>
                                            <a href={item.link}><span>
                                            <img className="w-3" width={60} src={item.icon} alt="theme-pure" /> {item.title}
                </span></a>
                                        </li>                                    
                                    )} 
                                </ul>
                            </div>
                        </div>
                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Call To Action</h4>
                            <div className="widget-form grey-bg">
                                <CallToAction /> 
                            </div>
                        </div>
                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Our Materials</h4>
                            <div className="tp-widget-item-2">
                                <ul>
                                    {materials.map((item , i) => 
                                        <li key={i}>
                                            <a href="#"><span><i className={item.icon}></i>{item.title}</span></a>
                                        </li>
                                    )} 
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsArea;