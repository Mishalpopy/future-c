import React from 'react';

// contact info data
const contact_info_data = [
    {
        id: 1, 
        icon: "fas fa-phone-alt",
        title: "Call Us Here",
        info_1: "+971 56 371 7846",
        info_2: "+971 56 371 7846",
        link_1: "tel:(098)89789090,+09089098987-0",
        link_2: "tel:1234162442",
    },
    {
        id: 2, 
        icon: "fas fa-envelope",
        title: "Email Address",
        info_1: "info@futureconnect.com",
        info_2: "me@futureconnect.com",
        link_1: "mailto:info@futureconnect.com",
        link_2: "mailto:me@futureconnect.com",
    },
    {
        id: 3, 
        icon: "fas fa-map-marker-alt",
        title: "KSA - Office Address",
        info_1: "Khalid Bin Moawiva street Al Rayyan,",
        info_2: " Jeddah, Kingdom of Saudi Arabia ",
        link_1: "#",
        link_2: "#",
    },
    {
        id: 3, 
        icon: "fas fa-map-marker-alt",
        title: "UAE - Office Address",
        info_1: "Khalid Bin Moawiva street Al Rayyan,",
        info_2: " Jeddah, Kingdom of Saudi Arabia ",
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
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
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