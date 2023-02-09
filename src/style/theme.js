import { extendTheme } from "@chakra-ui/react";
import "@fontsource/orbitron";
import { ButtonStyle as Button } from "./ButtonStyle";
import { TabStyle as Tab } from "./TabStyle";

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
               button: {
                    fontFamily: "Orbitron,sans-serif",
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
          Tab,
     },
});

export default theme;
