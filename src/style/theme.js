import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button } from "./ButtonStyle";
const config = {
     initialColorMode: "dark",
     useSystemColorMode: false,
};
const theme = extendTheme({
     colors: {
          primary: "#ffce0a",
     },
     components: {
          Button,
          config,
     },
});

export default theme;
