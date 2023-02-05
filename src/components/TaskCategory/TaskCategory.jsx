import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

const TaskCategory = () => {
     return (
          <Box p={2} mt="2">
               <ButtonGroup display="flex" justifyContent="space-between">
                    <Button variant={"solid"} size={["xs", "sm", "md", "lg"]}>
                         Todo List
                    </Button>
                    <Button size={["xs", "sm", "md", "lg"]}>
                         Daily Routine
                    </Button>
                    <Button size={["xs", "sm", "md", "lg"]}>Daily Notes</Button>
                    <Button size={["xs", "sm", "md", "lg"]}>Email</Button>
               </ButtonGroup>
          </Box>
     );
};

export default TaskCategory;
