// import { tabsAnatomy } from "@chakra-ui/anatomy";
// import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

export const TabStyle = {
     variants: {
          primary: (props) => ({
               bg: "primary",
               letterSpacing: "2px",
               bgGradient: "linear(to-br, #F15B2A, #E80A89)",
               color: "white",
               _hover: {
                    bgGradient: "linear(to-br, #E80A89, #F15B2A)",
               },
          }),
     },
};
