import { Box, Button, ButtonGroup, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./TaskCategory.module.css";

const TaskCategory = () => {
     return (
          <Box p={2} mt="2">
               <Container>
                    <Flex w={["100%", "90%"]}>
                         <Box flex="1" textAlign="center" padding="2">
                              <NavLink to="/" className={({ isActive }) => (isActive ? classes.activeLink : undefined)} end>
                                   Todo List
                              </NavLink>
                         </Box>
                         <Box flex="1" textAlign="center" padding="2">
                              <NavLink to="timefocus" className={({ isActive }) => (isActive ? classes.activeLink : undefined)}>
                                   Time Focus
                              </NavLink>
                         </Box>
                    </Flex>
                    {/* <ButtonGroup display="flex" justifyContent="center" gap={2}>
                         <Button size={["xs", "sm", "md", "lg"]} background="none">
                              <NavLink to="/" className={({ isActive }) => (isActive ? classes.activeLink : undefined)} end>
                                   Todo List
                              </NavLink>
                         </Button>
                         <Button size={["xs", "sm", "md", "lg"]} background="none">
                              <NavLink to="dailyroutine" className={({ isActive }) => (isActive ? classes.activeLink : undefined)}>
                                   Daily Routine
                              </NavLink>
                         </Button>
                         <Button size={["xs", "sm", "md", "lg"]} background="none">
                              <NavLink to="dailynotes" className={({ isActive }) => (isActive ? classes.activeLink : undefined)}>
                                   Daily Notes
                              </NavLink>
                         </Button>
                         <Button size={["xs", "sm", "md", "lg"]} background="none">
                              <NavLink to="email" className={({ isActive }) => (isActive ? classes.activeLink : undefined)}>
                                   Email
                              </NavLink>
                         </Button>
                         <Button size={["xs", "sm", "md", "lg"]} background="none">
                              <NavLink to="timefocus" className={({ isActive }) => (isActive ? classes.activeLink : undefined)}>
                                   Time Focus
                              </NavLink>
                         </Button>
                    </ButtonGroup> */}
               </Container>
          </Box>
     );
};

export default TaskCategory;
