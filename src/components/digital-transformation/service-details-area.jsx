import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrDocumentConfig } from 'react-icons/gr';
import { AiOutlineSolution,AiOutlineSync,AiOutlineFileProtect } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { PiPresentationChartBold } from 'react-icons/pi';RiCustomerService2Line
import { MdHealthAndSafety,MdOutlineManageAccounts,MdOnlinePrediction,MdInventory2,MdOutlineWorkspaces } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { BsFillPeopleFill,BsFingerprint,BsPersonVideo3 } from 'react-icons/bs';
import { BiLinkExternal,BiSolidCctv,BiNetworkChart } from 'react-icons/bi';
import { SiGooglemeet } from 'react-icons/si';




const service_details_content = {
    img: "/assets/img/digital-service/bg.jpg",
    title: "Service Overview",
    info_1: <>Welcome to Future Connect, your gateway to cutting-edge Digital Transformation Solutions. Explore our diverse range of services designed to revolutionize the way you do business.<br></br>At Future Connect, we understand that Digital Transformation is not just a service but a journey towards a connected and future-ready business environment. Embrace innovation with us and transform the way you operate!

    </>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: "/assets/img/digital-service/erp.svg",
     title: "ERP",
     info: "Optimize your business with our cloud-based ERP. Manage finances, projects, inventory, and customer relationships effortlessly. Boost productivity and profitability through automation."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/hospital.svg",
     title: "Hospital Management System",
     info: "An end-to-end software solution can help in improving the service quality of medical facilities or clinics.",
    },
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/bill.svg",
     title: "E-Invoicing",
     info: "Experience the best in KSA e-invoicing! Our solution is fast, feature-packed, secure, and 100% ZATCA compliant. Elevate your business effortlessly.",
    },
    
    {id: 4,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/fleet.svg",
     title: "Fleet Management",
    info: "Introducing our streamlined Fleet Management system – the solution for efficient tracking and optimization. Simplify fleet control, enhance visibility, and maximize efficiency effortlessly."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/asset.svg",
     title: "Asset Management ",
    info:"Introducing our concise Asset Management system – the key to efficient tracking and optimization. Simplify asset control, enhance visibility, and maximize productivity effortlessly."},
    {id: 7,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/digital.svg",
     title: "Digital Signage",
    info:"Introducing our concise Digital Signage solution – the key to impactful displays with minimal effort. Elevate communication, captivate audiences, and manage content effortlessly."},
    {id: 8,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/queue.svg",
     title: "Visitor Management System",
    info:"Introducing our efficient Queuing Systems – the shortcut to organized and seamless queues. Simplify customer flow, reduce wait times, and enhance overall service effortlessly."},
        {id: 10,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/hr.svg",
     title: "HR & Payroll Solution",
    info:"Seamlessly manage your human resources and payroll with our integrated solution. Streamline HR processes, ensure payroll accuracy, and enhance employee satisfaction effortlessly."},
    
    {id: 11,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/hr.svg",
     title: "LMS Solution",
    info:"Empower your organization with our Learning Management System (LMS). Elevate training efficiency, track progress, and foster continuous learning effortlessly."},

    {id: 11,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/field.svg",
     title: "Field Service Management",
    info:"Optimize field operations with our Field Service Management solutions. Streamline tasks and enhance efficiency effortlessly."},

    {id: 11,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/document.svg",
     title: "Document Management",
    info:"Simplify document handling and organization with our Document Management solutions. Improve workflow and accessibility effortlessly."},

    {id: 11,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/ware.svg",
     title: "Warehouse Management",
    info:"Maximize warehouse efficiency with our Warehouse Management solutions. Streamline processes and improve logistics effortlessly."},

    {id: 11,
        img: "/assets/img/services/service-details-bg.jpg",
        icon: "/assets/img/digital-service/inven.svg",
     title: "Inventory Management",
    info:"Take control of your inventory with our Inventory Management solutions. Ensure accurate tracking and efficient stock control effortlessly."},
  

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

    bottom_info_title: "Why Choose Future Connect",
    bottom_info: <>Future Connect is your dedicated partner in navigating the dynamic landscape of Digital Transformation. Our suite of services goes beyond mere solutions; we offer a transformative journey for your business. Embrace the power of innovation with our cloud-based ERP, comprehensive management systems, and streamlined solutions for every facet of your operations. Whether it's elevating healthcare services, optimizing fleet management, or enhancing communication through digital signage, we're here to propel your business into the future. At Future Connect, we don't just connect you with technology; we connect you with a future-ready, efficient, and seamlessly integrated business environment. Join us on this journey of innovation and transformation, where your success is our priority. Future Connect: Transforming Today for a Connected Tomorrow.</>,

service: [
    { id: 1, icon: "/assets/img/digital-service/software.svg", title: "Digital Transformation", link: "/digital-transformation" },
    { id: 2, icon: "/assets/img/digital-service/low.svg", title: "IT & LOW CURRENT", link: "/it-&-low-current" },
    { id: 3, icon: "/assets/img/digital-service/safery.svg", title: "SAFETY & SECURITY SYSTEMS",link: "/safety-&-security-systems" },
    { id: 4, icon: "/assets/img/digital-service/data.svg", title: "DATA CENTER & IT INFRASTRUCTURE",link: "/data-center-it-Infrastructure" },
    { id: 5, icon: "/assets/img/digital-service/network.svg", title: "NETWORK SECURITY",link: "/network-security" },
    { id: 6, icon: "/assets/img/digital-service/audio.svg", title: "AUDIO VISUAL SYSTEMS",link: "/audio-visual-systems" },
],


    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Company Profile"},
        {id: 2, icon: "fas fa-file-image", title: "Service Details"},
        
    ]


}
const {img ,icon, title, info_1, info_2, over_veiw_list, overview, overview_features, bottom_info_title, bottom_info, service , materials,over_veiw_list_two}  = service_details_content


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