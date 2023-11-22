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
    img: "/assets/img/hospitality/multimedia/banner.jpeg",
    title: "Service Overview",
    info_1: <>Step into the future of connectivity with our advanced power charging and USB solutions. Experience the next generation of fast charging and versatile USB connectivity. Our innovative products ensure that your devices stay powered up and seamlessly connected. From high-speed chargers to state-of-the-art USB cables, we bring you the latest in technology to enhance your digital experience. Embrace the future of power charging and USB connectivity—where efficiency meets innovation. Explore our range and stay ahead in the world of tomorrow.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/hospitality/multimedia/001.jpg",
         icon: <SiFirewalla />,
     title: "PullThrough Pro USB-C",
     info: "With mobile phones now standardizing on USB Type-C connectors, it has never been easier for your guests to mirror video to the guest room TV. The PullThrough Pro USB-C Video comprises our market leading PullThrough Pro coupled with a 2 metre USB Type-C to HDMI cable."},
    {id: 2,
        img: "/assets/img/hospitality/multimedia/002.jpg",
         icon: <CgWebsite />,
     title: "MediaHub UHD",
     info: "MediaHub UHD provides your guests with all the connections they need to play their video or audio content on the in-room TV and also to recharge their mobile devices. ",
    },
    {id: 3,
        img: "/assets/img/hospitality/multimedia/003.png",
         icon: <MdSecurity />,
     title: "PullThrough Pro AV-HDMI",
    info: "Whether you're looking for Internet access points or hook-ups to stream audio and video, or a universal cable holder, we have the easy-to-use solution."},
    {id: 4,
        img: "/assets/img/hospitality/multimedia/006.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "MediaHub UHD Desktop",
    info: "The MediaHub UHD Desktop is ideal for your guest room desk or other surface by the TV. Equipped with the most important and universally accepted mobile connections to charge and play, your guests will appreciate the two fast-charging USB ports, wireless Bluetooth for listening listen to their music over the TV speakers, and the HDMI port which supports 4K."},

    {id: 4,
        img: "/assets/img/hospitality/multimedia/007.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "MediaHub UHD Extender",
    info: "All-in-one connectivity station combining MediaHub UHD and PowerHub."},

    {id: 4,
        img: "/assets/img/hospitality/multimedia/008.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "MediaHub UHD Passthrough",
    info: "MediaHub with USB outlets, Bluetooth pairing, HDMI and audio jack. "},

   
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
    bottom_info: <>Empower your devices and embrace the ease of connectivity with our cutting-edge power charging and USB solutions. Step into a world where charging is fast, reliable, and tailored to your devices. Our future-ready products ensure that you stay effortlessly connected in the ever-evolving digital landscape. From rapid charging to versatile USB options, our range is designed to elevate your tech experience. Seize the future of seamless connectivity—explore our selection and redefine the way you power up and stay connected.</>,

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
                                            <a href="#"><span>
                    {React.cloneElement(item.icon, { className: 'icon-colored' })} {item.title}
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