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
    link: "/solutions",
    sub_menus: [
      { link: "/digital-transformation", title: "Digital Transformation" }, 
      { link: "/it-&-low-current", title: "IT & Low Current" },
      { link: "/safety-&-security-systems", title: "Safety & Security Systems" }, 
      { link: "/data-center-network-security", title: "Data Center & Network Security" },
      { link: "/audio-video-systems", title: "Audio Video Systems" },



    ],
  },
  {
    id: 4,
    mega_menu: true,
    has_dropdown: true,
    title: "Hospitality Hub",
    link: "/service-hospitality",
    sub_menus: [
      { link: "/Power-Charging-&-USB", title: "Power Charging & USB" }, 
      { link: "/Multimedia-Audio-&-Charging", title: "Multimedia Audio & Charging" },
      { link: "/Combination-Power-&-Charging", title: "Combination Power & Charging" }, 
      { link: "/Alarm-Clocks-&-Audio", title: "Alarm Clocks & Audio" },
      { link: "/Wireless-Charging", title: "Wireless Charging" },
      { link: "/BLUETOOTH-SPEAKERS", title: "Bluetooth Speakers" },
      { link: "/Meeting-&-Conference", title: "Meeting & Conference" },
      { link: "/Virtual-Reception-Kiosk", title: "Virtual Reception Kiosk" },
      { link: "/Bathroom-Technology", title: "Bathroom Technology" },


      
    ],
    
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
