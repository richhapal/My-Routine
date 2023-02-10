import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { timeFocusActions } from "../../redux-store/timeFocusSlice";
const ShortBreak = () => {
     const min = useSelector((state) => state.timeFocusReducer.shortTimeMinute);
     const sec = useSelector((state) => state.timeFocusReducer.shortTimeSecond);

     const isTimeRunning = useSelector((state) => state.timeFocusReducer.isTimeRunning);
     const dispatch = useDispatch();
     const startDefaultTimeHandler = () => {
          dispatch(timeFocusActions.updateIsTimeRunning());
          dispatch(
               timeFocusActions.startTimeInterval(
                    setInterval(() => {
                         dispatch(timeFocusActions.updateShortTimeAlert());
                    }, 1000)
               )
          );
     };

     const stopDefaultTimeHandler = () => {
          dispatch(timeFocusActions.stopTimeInterval());
     };

     return (
          <>
               <Box my={5}>
                    <Flex justifyContent="center" fontSize={["6xl", "8xl"]} fontWeight="bold">
                         <span>{min}</span>
                         <span>:</span>
                         <span>{sec}</span>
                    </Flex>
               </Box>
               <Box>
                    {!isTimeRunning && (
                         <Button size={["sm", "md"]} variant={"primary"} onClick={startDefaultTimeHandler}>
                              START
                         </Button>
                    )}
                    {isTimeRunning && (
                         <Button size={["sm", "md"]} variant={"primary"} onClick={stopDefaultTimeHandler}>
                              PAUSE
                         </Button>
                    )}
               </Box>
          </>
     );
};
export default ShortBreak;
