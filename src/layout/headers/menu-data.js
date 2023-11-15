const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    
  },

  {
    id: 3,
    mega_menu: true,
    has_dropdown: true,
    title: "Solutions",
    link: "/service",
    sub_menus: [
      { link: "/digital-transformation", title: "Digital Transformation" }, 
      { link: "/it-and-low-details.jsx", title: "IT & Low Current" },
      { link: "/safety-&-security-systems", title: "Safety & Security Systems" }, 
      { link: "/data-center-it-Infrastructure", title: "Data Center & IT Infrastructure" },
      { link: "/network-security", title: "Network Security" },
      { link: "/audio-visual-systems", title: "Audio Visual Systems" },



    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Hospitality Hub",
    link: "/",
    
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/",
    
  },


  
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  
];
export default menu_data;
