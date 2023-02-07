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
                         display="inline-block"
                         bgGradient="linear(to-br, #E80A89, #F15B2A)"
                         bgClip="text"
                    >
                         No TodoList
                    </Text>
               </Center>
          </Box>
     );
};
