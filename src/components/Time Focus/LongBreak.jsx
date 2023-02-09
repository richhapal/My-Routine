import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const LongBreak = () => {
     const MM = useSelector((state) => state.timeFocusReducer.longTimeMinute);
     const SS = useSelector((state) => state.timeFocusReducer.longTimeSecond);
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

export default LongBreak;
