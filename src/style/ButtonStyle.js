export const ButtonStyle = {
     variants: {
          primary: (props) => ({
               bg: "primary",
               color: "black",
               _hover: {
                    bg: props.colorMode === "dark" ? "white" : "black",
                    border: "1px solid",
                    borderColor: "primary",
                    color: "primary",
               },
          }),
     },
};
