import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const setting = {
  fade: true,
  slidesToShow: 1, // Set slidesToShow to 1 when using fade
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      },
    },
  ],
};

const slider_data = [
  {
    id: 1,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    cls: "tp-slider-overlay tp-slider-height",
    bg_img: "/assets/img/slider/sl-2.jpg",
    videoUrl: '/assets/img/abt-001.mp4',
    sub_title: "Transforming Today for a Connected Tomorrow",
    title: "Embrace Digital Transformation with Future Connect",
    info: (
      <>
      Explore a world of possibilities as we lead businesses into the future with innovative digital solutions. Unlock growth, enhance security, and connect to your fullest potential. Join us on a journey to transform today for a connected tomorrow.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Excellence</b> <br />Excellence
      </>
    ),
    page_direction: "/digital-transformation",
  },
  {
    id: 2,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    cls: "tp-slider-overlay tp-slider-height",
    bg_img: "/assets/img/slider/sl-1.jpg",
    sub_title: "Powering Progress Through Technology",
    title: "Future Connect: Your Partner in IT Excellence",
    info: (
      <>
        We go beyond being a technology solutions provider; we're architects of progress. Our mission is to empower businesses with cutting-edge technology, driving growth, and fostering innovation. Partner with us for IT excellence and a future fueled by technological advancements.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Excellence</b> <br />Excellence
      </>
    ),
    page_direction: "/it-&-low-current",
  },
  {
    id: 3,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    cls: "tp-slider-overlay tp-slider-height",
    bg_img: "/assets/img/slider/sl-3.jpg",
    sub_title: "Building a Secure Future",
    title: "Future Connect: Setting the Standard in Safety & Security",
    info: (
      <>
       Security is paramount. Future Connect ensures your business is fortified with state-of-the-art safety and security systems. Trust us to safeguard your present and secure your future.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Installation</b> <br /> Free Service
      </>
    ),
    page_direction: "/safety-&-security-systems",
  },
  {
    id: 4,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    cls: "tp-slider-overlay tp-slider-height",
    bg_img: "/assets/img/slider/sl-4.jpg",
    sub_title: "Navigating the Digital Landscape",
    title: "Future Connect: Pioneers in Data Center & IT Infrastructure",
    info: (
      <>
 In the digital era, infrastructure is the backbone of success. Future Connect leads the way in crafting robust data centers and IT infrastructure, ensuring your business thrives in the dynamic digital landscape.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Installation</b> <br /> Free Service
      </>
    ),
    page_direction: "/data-center-&-it-infrastructure",
  },
  {
    id: 5,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    cls: "tp-slider-overlay tp-slider-height",
    bg_img: "/assets/img/slider/sl-5.jpg",
    sub_title: "Fortify Your Network",
    title: "Future Connect: Unmatched Network Security Solutions",
    info: (
      <>
     The digital world demands robust networks. Future Connect delivers cutting-edge network security solutions, ensuring your connectivity remains uninterrupted and secure.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Installation</b> <br /> Free Service
      </>
    ),
    page_direction: "/network-security",
  },
  {
    id: 6,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    cls: "tp-slider-overlay tp-slider-height",
    bg_img: "/assets/img/slider/sl-6.jpg",
    sub_title: "Elevate Communication Experiences",
    title: "Future Connect: Shaping Audio-Visual Excellence",
    info: (
      <>
     Communication is an art. Future Connect excels in crafting audio-visual systems that elevate communication experiences. Join us in creating immersive and impactful interactions.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Installation</b> <br /> Free Service
      </>
    ),
    page_direction: "/audio-visual-systems",
  },
];

const SliderArea = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <div className="tp-slider-area">
        <div className="slider-active  slider-arrow-style p-relative">
          <button type="button" onClick={() => sliderRef.current?.slickPrev()} className="slick-prev">
            <i className="flaticon-left-arrow"></i>
          </button>
          <button type="button" onClick={() => sliderRef.current?.slickNext()} className="slick-next">
            <i className="flaticon-right-arrow"></i>
          </button>

          <Slider {...setting} ref={sliderRef}>
            {slider_data.map((item, i) => (
              <div key={i}>
                <div className="tp-slider-item tp-slider-overlay tp-slider-height d-flex align-items-center"
                  style={{ backgroundImage: `url(${item.bg_img})` }}>
                  <div className="container">
                    <div className="row">
                      <div className={item.col}>
                        <div className="tp-slider-content mt-120">
                          <span className="tp-slider-sub-title"> {item.sub_title} </span>
                          <h2 className="tp-slider-title"> {item.title} </h2>
                          <p> {item.info} </p>
                          {item.id === 7 ? (
                            <video autoPlay loop muted style={{ width: "100%", position: "absolute", top: "0", right: "0", zIndex: "-1"}}>
                              <source src={item.videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <div className="tp-slide-btn-box mt-40">
                              <div className="tp-slide-service mr-30">
                               
                              </div>
                              <div className="slider-btn">
                                <Link href={item.page_direction} className="tp-btn-white">
                                  Know More
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderArea;
