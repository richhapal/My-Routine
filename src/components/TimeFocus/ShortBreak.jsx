import React, { useEffect } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { timeFocusActions } from "../../redux-store/timeFocusSlice";
import NotifyMe from "./NotificationAlert";
const ShortBreak = () => {
     const { shortTimeMinute: min, shortTimeSecond: sec, showNotification, isTimeRunning } = useSelector((state) => state.timeFocusReducer);
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

     useEffect(() => {
          if (showNotification) {
               NotifyMe();
               const notification = new Notification(showNotification);
          }
     }, [min, sec]);

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
