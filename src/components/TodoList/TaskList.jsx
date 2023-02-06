import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { NoTask } from "./NoTask";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import { taskAction } from "../../redux-store/taskSlice";
let first = true;
function TaskList() {
     const taskArray = useSelector((state) => state.taskReducer.taskArray);
     const dispatch = useDispatch();
     useEffect(() => {
          let taskFromLocal = JSON.parse(
               window.localStorage.getItem("taskArray")
          );
          if (!taskFromLocal) {
               window.localStorage.setItem("taskArray", JSON.stringify([]));
               taskFromLocal = JSON.parse(
                    window.localStorage.getItem("taskArray")
               );
          }
          console.log(taskFromLocal);
          if (taskFromLocal.length !== 0) {
               dispatch(taskAction.updateTaskArray(taskFromLocal));
          } else {
               window.localStorage.setItem(
                    "taskArray",
                    JSON.stringify(taskArray)
               );
          }
     }, []);

     useEffect(() => {
          window.localStorage.setItem("taskArray", JSON.stringify(taskArray));
     }, [taskArray]);

     return (
          <Box m="auto" py="5" mx="2">
               <Center>
                    <Flex direction="column" gap="5">
                         {taskArray.length !== 0 &&
                              taskArray.map((item) => (
                                   <TaskItem
                                        key={item.id}
                                        id={item.id}
                                        {...item}
                                   />
                              ))}
                         {taskArray.length == 0 && <NoTask />}
                    </Flex>
               </Center>
          </Box>
     );
}

export default TaskList;
