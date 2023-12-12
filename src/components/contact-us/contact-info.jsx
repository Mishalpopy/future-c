import React from 'react';

// contact info data
const contact_info_data = [

    {
        id: 2, 
        icon: "fas fa-envelope",
        title: "Email Address",
        info_1: "info@futureconnectme.com",

        link_1: "mailto:info@futureconnect.com",

    },

    
   
   
    {
        id: 3, 
        icon: "fas fa-map-marker-alt",
        title: "KSA - Office Address",
        info_1: "#8533, Khalid bin Moawiya Street, Al Rayan District, Jeddah 23643, Saudi Arabia",
        info_2: "",
        link_1: "#",
        link_2: "#",
    },
    {
        id: 3, 
        icon: "fas fa-map-marker-alt",
        title: "UAE - Office Address",
        info_1: "1003 Park Palace World Trade Center,",
        info_2: " Dubai, United Arab Emirates",
        link_1: "#",
        link_2: "#",
       },

]

const ContactInfo = () => {
    return (
        <>
           <div className="tp-contact-info pb-90">
                <div className="container">
                    <div className="row contact-last-child">
                        {contact_info_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="contact-info-item text-center mb-30">
                                    <i className={item.icon}></i>
                                    <h5>{item.title}</h5>
                                    <a href={item.link_1}>{item.info_1}<br /></a>
                                    <a href={item.link_2}>{item.info_2}</a>
                                </div>
                             </div>
                        )} 
                    </div>
                </div>
            </div> 
        </>
    );
};

export default ContactInfo;