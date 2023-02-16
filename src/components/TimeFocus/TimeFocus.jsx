import React from "react";
import { Box, Button, ButtonGroup, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import ShortBreak from "./ShortBreak";
import DefaultTime from "./DefaultTime";
import LongBreak from "./LongBreak";
import { useDispatch, useSelector } from "react-redux";

import { timeFocusActions } from "../../redux-store/timeFocusSlice";

export const TimeFocus = () => {
     const [isSmallerThan508] = useMediaQuery("(max-width: 508px)");
     const { defaultSelect, shortSelect, longSelect } = useSelector((state) => state.timeFocusReducer);
     const dispatch = useDispatch();

     const selectHandler = (e) => {
          dispatch(timeFocusActions.updateTimeSelector(e.target.textContent));
     };

     return (
          <Container my={2}>
               <Box borderRadius="md" boxShadow={["2xl"]} bg="#ffffff3d" textAlign={"center"} py={5} px={2}>
                    <Box my={3}>
                         <ButtonGroup size={["sm", "md"]} justifyContent="center">
                              <Button variant={defaultSelect ? "primary" : "secondary"} onClick={selectHandler}>
                                   Default
                              </Button>
                              <Button variant={shortSelect ? "primary" : "secondary"} onClick={selectHandler}>
                                   Short
                                   {!isSmallerThan508 && "-Break"}
                              </Button>
                              <Button variant={longSelect ? "primary" : "secondary"} onClick={selectHandler}>
                                   Long
                                   {!isSmallerThan508 && "-Break"}
                              </Button>
                         </ButtonGroup>
                    </Box>
                    <Box fontFamily="Orbitron">
                         {defaultSelect && <DefaultTime />}
                         {shortSelect && <ShortBreak />}
                         {longSelect && <LongBreak />}
                    </Box>
               </Box>
          </Container>
     );
};

export default TimeFocus;
