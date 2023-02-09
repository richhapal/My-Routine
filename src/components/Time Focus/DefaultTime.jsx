import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { runningTimer } from "../../redux-store/timeFocusSlice";

const DefaultTime = () => {
     const MM = useSelector((state) => state.timeFocusReducer.defaultTimeMinute);
     const SS = useSelector((state) => state.timeFocusReducer.defaultTimeSecond);
     const dispatch = useDispatch();
     const startDefaultTimeHandler = () => {
          setInterval(() => {
               dispatch(runningTimer(MM, SS));
          }, 1000);
     };

     useEffect(() => {}, [MM, SS]);

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
                    <Button size={["sm", "md"]} variant={"primary"} onClick={startDefaultTimeHandler}>
                         START
                    </Button>
               </Box>
          </>
     );
};

export default DefaultTime;
