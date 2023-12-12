import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea,FaAccessibleIcon } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrDocumentConfig } from 'react-icons/gr';
import { AiOutlineSolution,AiOutlineSync,AiOutlineFileProtect } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { PiPresentationChartBold } from 'react-icons/pi';RiCustomerService2Line
import { MdHealthAndSafety,MdOutlineAccessibility,MdOutlineAlarmAdd,MdOutlineManageAccounts,MdFireplace,MdOutlineAccessibilityNew,MdOnlinePrediction,MdInventory2,MdOutlineWorkspaces } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { BsFillPeopleFill,BsFingerprint,BsPersonVideo3,BsWatch } from 'react-icons/bs';
import { BiLinkExternal,BiSolidCctv,BiNetworkChart } from 'react-icons/bi';
import { SiGooglemeet,SiFireflyiii,SiFsecure } from 'react-icons/si';
import { GiCctvCamera,GiSecurityGate,GiRoad,GiTyre,GiStarGate } from 'react-icons/gi';
import { ImRoad } from 'react-icons/im';





const service_details_content = {
    img: "/assets/img/services/service-details-bg-safety.jpg",
    title: "Solutions Overview",
    info_1: <>Safeguarding a company's assets, encompassing both property and personnel, is paramount for sustained success. Relying on experts with the knowledge and experience to implement effective security and safety measures is crucial. Through collaboration with reputable suppliers and experienced staff, companies can fortify their assets with confidence.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/safety/cctv.svg",
     title: "CCTV Systems",
     info: "Ensure comprehensive surveillance with our CCTV Systems. Monitor and secure your premises effortlessly."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/access.svg",
        title: "Access Control Systems",
     info: "Manage and restrict access seamlessly with our Access Control Systems. Enhance security effortlessly.",
    },
    {id: 3,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/fire.svg",
     title: "Fire Alarm and Detection Systems",
    info: "Ensure early detection and response to fires with our Fire Alarm and Detection Systems. Safeguard your property effortlessly."},
        {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/intru.svg",
     title: "Intrusion alarm and intercom systems",
    info:"Security alert and communication systems for enhanced premises protection and interaction."},
    {id: 7,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/smoke.svg",
        title: "VESDA (Very Early Smoke Detection Aspiration System)",
    info:"Detect smoke at the earliest signs with our VESDA system. Ensure rapid response and protection effortlessly."},
    {id: 8,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/audi2.svg",
     title: "Public Address ",
    info:"Facilitate clear communication and ensure public safety with our integrated systems. Deliver announcements and evacuation guidance effortlessly."},

    {id: 8,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/voice.svg",
     title: "Voice Alarm Systems",
    info:"Voice Alarm Systems deliver clear emergency alerts, enhancing safety with immediate instructions in various settings."},

    {id: 10,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/road.svg",
     title: "Road Blockers",
    info:"Control and secure access points with our Road Blockers. Manage entry effortlessly."},
    {id: 11,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/bollard.svg",
     title: "Bollards",
    info:"Enhance perimeter security with our Bollards. Control and restrict access effortlessly."},
      {id: 12,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/barries.svg",
     title: "Gate Barriers",
    info:"Gate barriers control vehicle entry in various spaces, including parking lots, hotels, supermarkets, and tollbooths, ensuring security and efficiency."},
    {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/gate.svg",
     title: "Speed Gates",
    info:"Fast, secure access control with stylish speed gates—bi-parting panels, swing, or sliding doors blend seamlessly for your building's entrance aesthetics."},
    
    {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/walk.svg",
     title: "Walkthrough & Metal Detector",
    info:"Enhance security screening with our Walkthrough & Metal Detector solutions. Ensure thorough inspections effortlessly."},
    {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/tri.svg",
     title: "Tripod Turnstile",
    info:"Security gate with three rotating arms for controlled pedestrian access."},
    {id: 14,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/safety/flap.svg",
     title: "Flap Barriers",
    info:"Controlled entry system with rotating flaps for secure access."},

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
    bottom_info: <>In conclusion, our comprehensive security solutions are tailored to ensure the protection of a company's invaluable assets, encompassing both property and personnel. Collaborating with seasoned experts and leveraging cutting-edge technologies, we offer a robust lineup of security measures. From WatchGuard CCTV Systems providing round-the-clock surveillance to Access Sentinel Control Systems fortifying entry points, and FireGuard Alarm & Detection Systems prioritizing safety, each solution is meticulously designed for effectiveness. The deployment of advanced technologies such as NOVEC, FM200, CO² in FireShield Suppression Systems and the prompt detection capabilities of IntrusionShield Alarm Systems further enhance security. VESDA AirWatch ensures very early smoke detection, while AudioAlert Public Address Systems enable clear communication in emergencies. Our physical security measures, including RoadFortress Blockers, BollardDefender Systems, GateGuard Barriers, TurnstileGuard Systems, SpikeDefender Tire Killers, GateMaster Gates & Operators, FenceFortress Systems, ArmoredHaven Guard Houses, and SecuScan Walkthrough & Metal Detectors, collectively establish a comprehensive defense against unauthorized access. The AlertGuard Fire Alarm System ensures a timely response to fire emergencies. Through this holistic approach, we empower companies to fortify their assets with confidence and resilience.</>,

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


const  ServiceDetailsArea = () => {
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
                                            <img className="w-3" width={60} src={item.icon} alt="theme-pure" />
                                                <h5>{item.title}</h5>
                                                <p>{item.info}</p>
                                            </div>
                                        </div>                                    
                                    )} 
                                </div>
                                <div className="tp-overview-fea-list">
                                    
                            

                                

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