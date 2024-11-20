/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html", // You can add more paths to HTML files if needed
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths for JS/TS files if you have a JS framework
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#5A5A5A",
        primary_red: "#A93800",
        yellow: "#F8FF00",
        green: "#457B00",
        orange: "#F06700"
      },
      fontFamily: {
        jungleFever: ["JungleFever"],
        roboto: ["Roboto"],
      },
      boxShadow: {
        shadow: "0px 4px 20px 0px #00000033",
        "shadow-red": "0px 4px 0px 0px #A93800",
        "shadow-orange": "0px 4px 0px 0px #F06700"
      },
      backgroundColor: {
        primary_red: "#A93800",
        yellow: "#F8FF00",
        green: "#457B00",
      },
      backgroundImage: {
        bg_gradient_orange: "linear-gradient(90deg, rgba(240, 103, 0, 0) -10%, #F06700 100%)",
        bg_gradient_red: "linear-gradient(90deg, rgba(47, 20, 9, 0) -10%, #2F1409 100%)",
        bg_gradient_green: "linear-gradient(90deg, rgba(69, 123, 0, 0) -10%, #457B00 100%)",
        bg_gradient_green_mobile: "linear-gradient(90deg, rgba(69, 123, 0, 0) -50%, #457B00 100%)",
        bg_gradient_orange_mobile: "linear-gradient(90deg, rgba(240, 103, 0, 0) -60%, #F06700 100%)",
      },
      letterSpacing: {
        normal: "0",
      },
      fontSize: {
        8: "8px",
        9: "9px",
        10: "10px",
        12: "12px",
        14: "14px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
        36: "36px",
        38: "38px",
        42: "42px",
        40: "40px",
        44: "44px",
        48: "48px",
        50: "50px",
        64: "64px",
        80: "80px",
      },
      lineHeight: {
        0: "0px",
        9: "9px",
        14: "14px",
        15: "15px",
        18.78: "18.78px",
        20: "20px",
        22: "22px",
        24.8: "24.8px",
        25: "25px",
        26: "26px",
        28.61: "28.61px",
        30: "30px",
        32: "32px",
        36: "36px",
        37.57: "37.57px",
        38.14: "38.12px",
        40: "40px",
        46: "46px",
        48: "48px",
        57.22: "57.22px",
        58: "58px",
        60: "60px",
        66: "66px",
        75.14: "75.14px",
        76: "76px",
        80: "80px",
        95.36: "95.36px",
      },
      gap: {
        4: "4px",
        5: "5px",
        10: "10px",
        14: "14px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
        25: "25px",
        28: "28px",
        30: "30px",
        35: "35px",
        40: "40px",
        50: "50px",
        55: "55px",
        60: "60px",
        65: "65px",
        70: "70px",
        75: "75px",
        80: "80px",
        85: "85px",
        90: "90px",
        100: "100px",
      },
      margin: {
        0: '0px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        8: '8px',
        9: '9px',
        10: '10px',
        14: '14px',
        20: '20px',
        24: '24px',
        25: '25px',
        30: '30px',
        35: '35px',
        40: '40px',
        50: '50px',
        55: '55px',
        60: '60px',
        70: '70px',
        80: '80px',
        88: '88px',
        90: '90px',
        100: '100px',
      }, 
      padding: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        14: '14px',
        16: '16px',
        20: '20px',
        22: '22px',
        25: '25px',
        26: '26px',
        28: '28px',
        30: '30px',
        35: '35px',
        40: '40px',
        44 : '44px',
        45: '45px',
        50: '50px',
        55: '55px',
        60: '60px',
        70: '70px',
        80: '80px',
        88: '88px',
        90: '90px',
        100: '100px',
        140: '140px',
        '56.25_per': '56.25%',
        '75_per': '75%',
        '100_per': '100%',
    },
    width: {
        5: "5px",
        10: "10px",

        20: "20px",
        30: "30px",
        40: "40px",
        48: "48px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
    },
    height: {
        5: "5px",
        10: "10px",
        16: '16px',
        20: "20px",
        30: "30px",
        40: "40px",
        48: "48px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
    },
    screens: {
      // Mobile First
      xsscreen: { 'max': '320px' },
      xxsscreen1: { 'max': '374px' },
      xsscreen1: { 'min': '375px' },
      xsscreen2: { 'max': '400px' },
      xsscreen3: { 'min': '401px' },
      smscreen: { 'max': '575px' },
      smscreen1: { 'min': '576px' },
      smscreen2: { 'max': '639px' },
      // Tablet First
      mdscreen5: { 'max': '749px' },
      mdscreen4: { 'min': '750px' },
      mdscreen: { 'max': '767px' },
      mdscreen1: { 'max': '989px' },
      mdscreen3: { 'max': '991px' },
      mdscreen2: { 'min': '990px' },
      mdscreen2_min: { 'min': '992px' },
      lgscreen: { 'max': '1023px' },
      lgscreen_min: { 'min': '1024px' },
      xlscreen: { 'max': '1199px' },
      xlscreen1: { 'min': '1200px' },
      xlscreen2: { 'max': '1279px' },
      // Desktop First
      xl: { 'min': '1280px' },
      small_dektop_min: {'min': '1400px'},
      small_desktop1: { 'max': '1400px' },
      small_desktop2: { 'max': '1500px' },
      small_desktop2_min: { 'min': '1500px' },
      small_desktop: { 'min': '1366px' },
      desktop: { 'max': '1440px' },
      large_desktop: { 'max': '1512px' },
      large_desktop2: { 'min': '1513px' },
      midlarge_desktop: { 'min': '1600px' },
      extlarge_desktop: { 'min': '1921px' },
  }
    },
  },
  plugins: [],
};
