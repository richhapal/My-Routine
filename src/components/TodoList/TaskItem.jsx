import { Box } from "@chakra-ui/react";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../redux-store/taskSlice";
import { ShowTask } from "./ShowTask";
import { ShowEdit } from "./ShowEdit";
const TaskItem = (props) => {
     const isEdit = useSelector((state) => state.taskReducer.isEdit);
     const dispatch = useDispatch();

     const deleteHandler = (e) => {
          console.log(e.target.id);
          dispatch(taskAction.deleteTask({ id: e.target.id }));
     };
     return (
          <Box
               border="2px solid"
               borderColor="primary"
               borderRadius="md"
               width={["sm", "md", "lg", "xl"]}
               mx={["1"]}
               p="2"
          >
               {isEdit !== props.id && <ShowTask {...props} />}
               {isEdit === props.id && <ShowEdit {...props} />}
          </Box>
     );
};

export default TaskItem;
