import { extendTheme } from "@chakra-ui/react";
import "@fontsource/orbitron";
import { ButtonStyle as Button } from "./ButtonStyle";
import { Global } from "@emotion/react";

// const Fonts = () => (
//      <Global
//           styles={`
//       /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */

//      //   <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Roboto:wght@500&display=swap" rel="stylesheet">

//      @font-face {
//           font-family: 'Orbitron';
//           font-style: normal;
//           font-weight: 500;
//           font-display: swap;
//           src:src(https://fonts.googleapis.com/css2?family=Orbitron:wght@500)
//           // src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2');
//           unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
//         }

//       /* latin-ext */

//       url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
//       @font-face {
//           font-family: 'Orbitron';
//           font-style: normal;
//           font-weight: 700;
//           font-display: swap;
//           src: url(https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap.woff2) format('woff2');
//           unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
//         }
//       @font-face {
//         font-family: 'Open Sans';
//         font-style: normal;
//         font-weight: 700;
//         font-display: swap;
//         src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2');
//         unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
//       }
//       /* latin */
//       @font-face {
//         font-family: 'Open Sans';
//         font-style: normal;
//         font-weight: 700;
//         font-display: swap;
//         src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');
//         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//       }
//       /* latin-ext */
//       @font-face {
//         font-family: 'Raleway';
//         font-style: normal;
//         font-weight: 400;
//         font-display: swap;
//         src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCGPrcVIT9d0c-dYA.woff) format('woff');
//         unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
//       }
//       /* latin */
//       @font-face {
//         font-family: 'Raleway';
//         font-style: normal;
//         font-weight: 400;
//         font-display: swap;
//         src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrcVIT9d0c8.woff) format('woff');
//         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//       }
//       `}
//      />
// );

const config = {
     initialColorMode: "dark",
     useSystemColorMode: false,
};
const theme = extendTheme({
     styles: {
          global: {
               header: {
                    fontFamily: "Orbitron,sans-serif",
                    fontWeight: "800",
                    letterSpacing: ["1px", "5px", "8px", "10px"],
               },
          },
     },
     // fonts: {
     //      body: 'Orbitron',sans-serif;
     // },
     config,
     colors: {
          primary: "#ffce0a",
     },
     components: {
          Button,
     },
});

export default theme;
