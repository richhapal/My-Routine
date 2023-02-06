import { Box, useColorMode } from "@chakra-ui/react";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../redux-store/taskSlice";
import { ShowTask } from "./ShowTask";
import { ShowEdit } from "./ShowEdit";
const TaskItem = (props) => {
     const { colorMode } = useColorMode();
     const isEdit = useSelector((state) => state.taskReducer.isEdit);
     const dispatch = useDispatch();

     const deleteHandler = (e) => {
          console.log(e.target.id);
          dispatch(taskAction.deleteTask({ id: e.target.id }));
     };
     return (
          <Box
               borderColor={"red"}
               bgGradient="linear(to-br, #E80A89, #F15B2A)"
               //      mx={["1"]}
               borderRadius="md"
               p="3px"
          >
               <Box
                    border="3px solid"
                    // borderColor="red"
                    borderColor="transparent"
                    bg={colorMode === "dark" ? "black" : "white"}
                    borderRadius="md"
                    width={["sm", "md", "lg", "xl"]}
                    p="2"
               >
                    <Box>
                         {isEdit !== props.id && <ShowTask {...props} />}
                         {isEdit === props.id && <ShowEdit {...props} />}
                    </Box>
               </Box>
          </Box>
     );
};

export default TaskItem;
