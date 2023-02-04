import React from "react";
import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";

import { FaUserAlt, FaMoon, FaSun } from "react-icons/fa";
const Navigation = () => {
     const { colorMode, toggleColorMode } = useColorMode();
     return (
          <Box as="header" bg="#000000" m="auto" w="100%">
               <Flex alignItems="center" mx={["sm", "xl"]}>
                    <Box
                         color="primary"
                         fontSize={["2xl", "3xl"]}
                         fontWeight={["bold", "extrabold"]}
                         flex="1"
                         textAlign={"center"}
                    >
                         <Text>TodoList</Text>
                    </Box>
                    <Box
                         as="button"
                         fontSize={["2xl", "3xl"]}
                         px="5"
                         color="primary"
                         onClick={toggleColorMode}
                    >
                         {colorMode === "dark" ? <FaSun /> : <FaMoon />}
                    </Box>
                    {/* <Box
                         as="button"
                         fontSize={["2xl", "3xl"]}
                         px="5"
                         color="primary"
                    >
                         <FaUserAlt />
                    </Box> */}
               </Flex>
          </Box>
     );
};

export default Navigation;
