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
    img: "/assets/img/hospitality/blue/bg.jpg",
    title: "Service Overview",
    info_1: <>Explore a curated selection of cutting-edge Bluetooth speakers from top manufacturers, designed to elevate the stay of modern hotel guests. Experience immersive audio and seamless connectivity, enhancing your hotel experience with premium sound quality and style.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/hospitality/blue/001.jpg",
         icon: <SiFirewalla />,
     title: "JBL Horizon 2 DAB Hotel",
     info: "Bluetooth clock radio DAB/DAB+/FM speaker with Security and LED light."},
    {id: 2,
        img: "/assets/img/hospitality/blue/002.jpg",
         icon: <CgWebsite />,
     title: "Harman Kardon Aura Studio 3 Hotel",
     info: "Timeless, iconic design of the Harman Kardon Aura Studio 3 Hotel for 360 degrees of beautiful sound. A stunning Bluetooth® speaker that looks as good as it sounds. Specifically designed and customisable for hotel guest rooms. ",
    },
    {id: 3,
        img: "/assets/img/hospitality/blue/003.jpg",
         icon: <MdSecurity />,
     title: "Harman Kardon Onyx Studio 8 Hotel",
    info: "Harman Kardon Onyx Studio 8 hotel. Specifically designed and customisable for hotel guest rooms. Both stylish and sustainable, it's crafted from recycled materials, combining eco friendly choices and beautiful design."},
    {id: 4,
        img: "/assets/img/hospitality/blue/004.png",
         icon: <BsFillHddNetworkFill />,
     title: "Harman Kardon Citation ONE MKII Hotel",
    info: "Harman Kardon Citation ONE MKII Hotel blends audio innovation with sophisticated design. Specifically designed and customisable for hotel guest rooms. "},

    {id: 4,
        img: "/assets/img/hospitality/blue/005.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "SoundRise Hotel II",
    info: "A modern bedside alarm clock with Bluetooth speaker and multiple charging ports. "},

    {id: 4,
        img: "/assets/img/hospitality/blue/006.jpeg",
         icon: <BsFillHddNetworkFill />,
     title: "Station A",
    info: "Hotel Alarm Clock With Qi Wireless Charging, Dual USB Outlets And Bluetooth Speaker"},


    {id: 4,
        img: "/assets/img/hospitality/blue/007.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "Harman Kardon JBL GO 2",
    info: "Full-featured waterproof Bluetooth speaker your guests can take with them everywhere."},

    {id: 4,
        img: "/assets/img/hospitality/blue/008.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "iHome iBTW39",
    info: "Qi wireless charging bedside alarm clock with USB charging port, Bluetooth and speakerphone."},

    {id: 4,
        img: "/assets/img/hospitality/blue/009.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "iHome HW5",
    info: "Bedside alarm clock with Qi Wireless Charging, Bluetooth speaker and dual USB Type A and Type C charging ports. "},















    {id: 4,
        img: "/assets/img/hospitality/blue/010.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "SoundRise Hotel",
    info: "Convenient Bluetooth room speaker with an upright design and small footprint which allows wireless audio streaming. "},


    {id: 4,
        img: "/assets/img/hospitality/blue/011.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "SoundRise Classic Hotel",
    info: "Classic alarm clock and bedside speaker to complement a modern lifestyle."},

    {id: 4,
        img: "/assets/img/hospitality/blue/012.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "Sound Spot",
    info: "Conveniently compact Bluetooth speaker with USB charging. "},

    {id: 4,
        img: "/assets/img/hospitality/blue/013.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "ChargeTime Plus",
    info: "Unique hotel alarm clock with a Bluetooth speaker and dual fast charging USB ports for charging smart devices. "},


    {id: 4,
        img: "/assets/img/hospitality/blue/014.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "Harman Kardon Citation Oasis",
    info: "Smart speaker with a built-in alarm clock and wireless charging that can be controlled using a smartphone App which is a suitable compact sound system for use within rooms. "},


    {id: 4,
        img: "/assets/img/hospitality/blue/015.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "JBL Sound All-In-One Soundbar",
    info: "Surround guest rooms with high quality sound by streaming audio through this compact, powerful and easy-to-use JBL Bar 2.0 All-in-One soundbar. "},

    {id: 4,
        img: "/assets/img/hospitality/blue/016.png",  
         icon: <BsFillHddNetworkFill />,
     title: "Dampf Air - Bluetooth Soundbar",
    info: "Dampf's hospitality soundbar is designed specifically for hotel rooms, providing guests with an exceptional audio experience. The soundbar offers secured Bluetooth pairing, volume limitation, and easy connection to TVblue"},


    






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
    bottom_info: <>Make every journey a seamless experience with our compact and versatile travel adapters. Whether you're a jetsetter, business traveler, or adventurer, our travel accessories are designed to keep you connected wherever you roam. Explore the world with confidence, knowing that your devices are powered up and ready for the next adventure.</>,

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