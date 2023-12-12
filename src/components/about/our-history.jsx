import Link from 'next/link';
import React from 'react';


const history_data = {
    history: "",
    title: "ABOUT US",
    description: <></>,

    yearly_info: [
        {
            id: 1, 
            year: "Our Vision",
            title: "Empowering Success Through Technology",
            info: <>Our vision is to shape a connected tomorrow where technology is an enabler, not a barrier. We aspire to lead businesses into a seamless digital future where they can thrive, adapt, and innovate. Our journey is about pioneering new paths to connectivity.</>,
        },
        {
            id: 1, 
            year: "Our Mission",
            title: "Noman Design Award 2010",
            info: <>Our mission is clear: to empower businesses with cutting-edge technology that fuels growth, enhances security, and connects them to their fullest potential. We believe that the future is about harnessing the power of innovation, and we are committed to leading the way.</>,
        },
        {
            id: 1, 
            year: "Expert Team",
            title: "Best Agency In World 2023",
            info: <>Our team of experts is committed to your success, guaranteeing that your needs are met with professionalism and proficiency.</>,
        },
    ]
}
const {history, title, description, yearly_info} = history_data

const OurHistory = () => {
    return (
        <>
            <div className="tp-history-area pb-85 fix">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xxl-12 col-xl-7 col-lg-12">
                            {yearly_info.map((item, i)  => 
                                <div key={i} className="tp-ab-4-right d-flex align-items-center">
                                    <h4>{item.year}</h4>
                                    <div className="ab-4-content">
                                    
                                        <p>{item.info}</p>
                                    </div>
                                </div>                            
                            )}                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurHistory;