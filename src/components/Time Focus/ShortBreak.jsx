import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const ShortBreak = () => {
     const MM = useSelector((state) => state.timeFocusReducer.shortTimeMinute);
     const SS = useSelector((state) => state.timeFocusReducer.shortTimeSecond);
     return (
          <>
               <Box my={5}>
                    <Flex justifyContent="center" fontSize={["8xl", "9xl"]} fontWeight="bold">
                         <span>{MM}</span>
                         <span>:</span>
                         <span>{SS}</span>
                    </Flex>
               </Box>
               <Box>
                    <Button size={["sm", "md"]} variant={"primary"}>
                         START
                    </Button>
               </Box>
          </>
     );
};
export default ShortBreak;
