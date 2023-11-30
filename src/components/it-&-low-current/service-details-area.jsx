import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrDocumentConfig } from 'react-icons/gr';
import { AiOutlineSolution,AiOutlineSync,AiOutlineFileProtect } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { PiPresentationChartBold } from 'react-icons/pi';RiCustomerService2Line
import { MdHealthAndSafety,MdQueue,MdOnlinePrediction,MdInventory2,MdOutlineWorkspaces,MdComputer,MdVideoStable,MdOutlineSurroundSound } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { BsFillPeopleFill,BsFingerprint,BsPersonVideo3,BsFillClockFill,BsFillShieldFill,BsFillLightbulbFill } from 'react-icons/bs';
import { BiLinkExternal,BiSolidMobileVibration,BiSolidCctv,BiNetworkChart } from 'react-icons/bi';
import { SiGooglemeet,SiOpenaccess,SiIntercom } from 'react-icons/si';

import { FaSatelliteDish } from 'react-icons/fa';



const service_details_content = {
    img: "/assets/img/itandlow/bg.jpg",
    title: "Service Overview",
    info_1: <>Welcome to the future of connectivity and control with our innovative range of solutions at Future Connect. Explore the seamless integration of technology into various aspects of your environment, designed to elevate efficiency and simplify operations effortlessly.<br></br>At Future Connect, we redefine connectivity and control, offering solutions that seamlessly integrate into your environment. Embrace the future of technology with us, where efficiency meets innovation, and control is simplified. Future Connect: Connecting Tomorrow, Today.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/wireless.svg",
     title: "Wireless Network Point Installations",
     info: "Extend your network reach with our Wireless Network Point Installations. Achieve seamless connectivity effortlessly."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/building.svg",
     title: "Building Management Systems",
     info: "Efficiently control and manage building operations with our Building Management Systems. Enhance automation effortlessly.",
    },
    {id: 3,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/ip.svg",
     title: "Public Address Systems",
    info: "Ensure clear communication with our Public Address Systems. Broadcast messages seamlessly."},
    {id: 4,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/iptv.svg",
     title: "IPTV Systems",
    info: "Experience the future of television with our IPTV Systems. Enjoy high-quality content effortlessly."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/nurse.svg",
     title: "Nurse Call Systems",
    info:"Prioritize healthcare with our Nurse Call Systems. Ensure quick and efficient communication effortlessly."},
    {id: 7,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/home.svg",
     title: "Home Automation Systems",
    info:"Transform your home into a smart living space with our Home Automation Systems. Simplify control effortlessly."},
    {id: 8,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/clcok.svg",
     title: "Master Clock Systems",
    info:"Keep everything in sync with our Master Clock Systems. Manage time effortlessly."},
    {id: 10,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/que.svg",
     title: "Queue Management Systems",
    info:"Organize and streamline queues with our Queue Management Systems. Improve efficiency effortlessly."},
       {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/parking.svg",
     title: "Parking Management Systems",
    info:"Optimize parking spaces with our Parking Management Systems. Ensure smooth operations effortlessly."},

    {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/itandlow/ip-call.svg",
     title: "IP Telephone System",
    info:"Upgrade your communication with our IP Telephone System. Experience enhanced connectivity and seamless voice communication effortlessly."},

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

    bottom_info_title: "Why Choose Future Connect",
    bottom_info: <>Future Connect invites you to embrace a future where connectivity meets control seamlessly. Our innovative solutions, ranging from wireless network installations to advanced home automation systems, redefine how you interact with and manage your environment. Whether you are optimizing building operations, prioritizing healthcare communication, or enhancing your home's intelligence, our technologies work effortlessly to simplify, streamline, and elevate your experience. At Future Connect, we don't just provide solutions; we offer a vision of a connected and automated future where efficiency and innovation go hand in hand. Join us in shaping a tomorrow where technology works effortlessly to enhance your world. Future Connect: Connecting Effortlessly, Empowering Tomorrow.</>,

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
                                            <img className="w-3" width={60} src={item.icon} alt="theme-pure" />
                                                <h5>{item.title}</h5>
                                                <p>{item.info}</p>
                                            </div>
                                        </div>                                    
                                    )} 
                                </div>
                                <div className="tp-overview-fea-list">
                                

                                    <div className="tp-bottom-info pt-20">
                                        <h4>{bottom_info_title}</h4>
                                        <p>{bottom_info}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="tp-sidebar-widget">
                            <h4 className="tp-widget-title">Our Services</h4>
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