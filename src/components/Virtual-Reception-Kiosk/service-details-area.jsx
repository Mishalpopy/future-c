import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea,FaNetworkWired } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrDocumentConfig } from 'react-icons/gr';
import { AiOutlineSolution,AiOutlineSync,AiOutlineFileProtect } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { PiPresentationChartBold } from 'react-icons/pi';RiCustomerService2Line
import { MdSecurity,MdOutlineNetworkPing,MdOutlineAlarmAdd,MdOutlineManageAccounts,MdFireplace,MdOutlineAccessibilityNew,MdOnlinePrediction,MdInventory2,MdOutlineWorkspaces } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { BsFillPeopleFill,BsFingerprint,BsFillHddNetworkFill,BsWatch } from 'react-icons/bs';
import { BiLinkExternal,BiSolidCctv,BiNetworkChart } from 'react-icons/bi';
import { SiGooglemeet,SiFireflyiii,SiFirewalla } from 'react-icons/si';
import { GiCctvCamera,GiSecurityGate,GiRoad,GiTyre,GiStarGate } from 'react-icons/gi';
import { ImRoad } from 'react-icons/im';
import { CgWebsite } from 'react-icons/cg';






const service_details_content = {
    img: "/assets/img/hospitality/mee/bg2.jpeg",
    title: "Service Overview",
    info_1: <>Streamline your stay with cutting-edge self-service kiosks and mobile keys for swift check-in and check-out, elevating your guest experience with convenience at your fingertips.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/hospitality/mee/002.jpg",
         icon: <SiFirewalla />,
     title: "Virtual Reception Kiosk & Mobile",
     info: "A virtual reception kiosk to cover all of your guests' check-in needs. The Virdee kiosk is an elegant addition to any lobby and provides a seamless, all-in-one solution for check-in and check-out. Guests can log in simply by scanning a QR code"},
   
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

    bottom_info_title: "Why Choose Future Connect",
    bottom_info: <>Discover a new era of guest satisfaction with our range of alarm clocks that redefine the wake-up experience. Whether you're a boutique hotel, luxury resort, or modern inn, our clocks add a touch of elegance and innovation to every room, ensuring that your guests start their day on the right note. Explore the future of hotel amenities with our stylish and feature-packed alarm clocks.</>,

service: [
    { id: 1, icon: <GrTechnology />, title: "Digital Solutions" },
    { id: 2, icon: <GrShieldSecurity />, title: "Security Solutions" },
    { id: 3, icon: <AiOutlineSolution />, title: "Operations Solutions" },
    { id: 4, icon: <FaHotel />, title: "Hospitality Solutions" },
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
                                            <img className="w-10 mb-10" src={item.img}  alt="theme-pure" />

                                                <h5>{item.title}</h5>
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