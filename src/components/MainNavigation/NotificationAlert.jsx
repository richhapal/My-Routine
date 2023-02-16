import { Box, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotification } from "../../redux-store/notificatonAlertSlice";

const NotificationAlert = () => {
     const { showNotification, browserPermissionAlert: browserPermission } = useSelector((state) => state.notificationAlertReducer);
     const dispatch = useDispatch();
     useEffect(() => {
          setTimeout(() => {
               dispatch(updateNotification());
          }, 2500);
     }, []);
     return (
          <>
               {showNotification && !browserPermission && (
                    <Box py={3} bg="#FFD700" color="blackAlpha.900" fontSize={["xs", "sm"]} fontWeight="extrabold" fontFamily="orbitron" letterSpacing={[2, 2, 2, 3, 4]}>
                         <Center>
                              <p>Please Allow Notification Permission</p>
                         </Center>
                    </Box>
               )}
          </>
     );
};

export default NotificationAlert;
