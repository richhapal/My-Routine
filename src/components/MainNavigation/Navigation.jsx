import React from "react";
import {
     Box,
     Button,
     Flex,
     IconButton,
     Text,
     useColorMode,
} from "@chakra-ui/react";

import { FaUserAlt, FaMoon, FaSun } from "react-icons/fa";
const Navigation = () => {
     const { colorMode, toggleColorMode } = useColorMode();
     return (
          <Box
               as="header"
               m="auto"
               w="100vw"
               // sx={{ boxShadow: " 15px 4px 10px #b1b9b3" }}
          >
               <Flex alignItems="center" mx={["sm", "xl"]}>
                    <Box
                         fontSize={["2xl", "3xl"]}
                         fontWeight={["bold", "extrabold"]}
                         flex="1"
                         textAlign={"center"}
                    >
                         <Text>My Routine</Text>
                    </Box>
                    <Box>
                         {/* <IconButton
                              fontSize={["xl", "2xl"]}
                              px="5"
                              onClick={toggleColorMode}
                              icon={
                                   colorMode === "dark" ? <FaSun /> : <FaMoon />
                              }
                         /> */}
                         <Button
                              fontSize={["xl", "2xl"]}
                              px="5"
                              onClick={toggleColorMode}
                              bg="none"
                         >
                              {colorMode === "dark" ? <FaSun /> : <FaMoon />}
                         </Button>
                    </Box>
               </Flex>
          </Box>
     );
};

export default Navigation;
