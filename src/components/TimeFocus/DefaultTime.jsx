import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotifyMe from "./NotificationAlert";
import { runningTimer, timeFocusActions } from "../../redux-store/timeFocusSlice";
let first = true;
const DefaultTime = () => {
     const { defaultTimeMinute: min, defaultTimeSecond: sec, isTimeRunning, showNotification } = useSelector((state) => state.timeFocusReducer);
     const dispatch = useDispatch();
     const startDefaultTimeHandler = () => {
          dispatch(timeFocusActions.updateIsTimeRunning());
          dispatch(
               timeFocusActions.startTimeInterval(
                    setInterval(() => {
                         dispatch(timeFocusActions.updateDefaultTimeAlert());
                    }, 1000)
               )
          );
     };

     const stopDefaultTimeHandler = () => {
          dispatch(timeFocusActions.stopTimeInterval());
     };

     useEffect(() => {
          if (first) {
               first = false;
               return;
          }
          NotifyMe();
     }, []);

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

export default DefaultTime;
