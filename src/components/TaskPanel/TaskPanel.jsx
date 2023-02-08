import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const TaskPanel = (props) => {
     return (
          <Box
               height="80vh"
               mx={"2"}
               // bg="rgba(230,230,230,0.05)"
               borderRadius={"md"}
               boxShadow="0px 6px 10px rgba(0,0,0,.05)"
          >
               {props.children}
          </Box>
     );
};

export default TaskPanel;
