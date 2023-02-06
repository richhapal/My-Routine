import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const TaskCategory = () => {
     return (
          <Box p={2} mt="2">
               <ButtonGroup display="flex" justifyContent="center" gap={2}>
                    <Button size={["xs", "sm", "md", "lg"]} background="none">
                         <NavLink to="/"> Todo List</NavLink>
                    </Button>
                    <Button size={["xs", "sm", "md", "lg"]} background="none">
                         <NavLink to="dailyroutine"> Daily Routine</NavLink>
                    </Button>
                    <Button size={["xs", "sm", "md", "lg"]} background="none">
                         <NavLink to="dailynotes"> Daily Notes</NavLink>
                    </Button>
                    <Button size={["xs", "sm", "md", "lg"]} background="none">
                         <NavLink to="email"> Email</NavLink>
                    </Button>
               </ButtonGroup>
          </Box>
     );
};

export default TaskCategory;
