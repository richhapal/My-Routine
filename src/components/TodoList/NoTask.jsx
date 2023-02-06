import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

export const NoTask = () => {
     return (
          <Box my={6} m="auto">
               <Center>
                    <Text
                         color="primary"
                         fontSize={["2xl", "3xl"]}
                         fontWeight={["bold", "extrabold"]}
                    >
                         No Task
                    </Text>
               </Center>
          </Box>
     );
};
