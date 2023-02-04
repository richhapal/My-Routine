import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button } from "./ButtonStyle";
const config = {
     initialColorMode: "dark",
     useSystemColorMode: false,
};
const theme = extendTheme({
     config,
     colors: {
          primary: "#ffce0a",
     },
     components: {
          Button,
     },
});

export default theme;
