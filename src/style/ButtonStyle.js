export const ButtonStyle = {
     variants: {
          primary: (colorMode) => ({
               bg: "primary",
               color: "black",
               _hover: {
                    bg: "black",
                    border: "1px solid",
                    borderColor: "primary",
                    color: "primary",
               },
          }),
     },
};
