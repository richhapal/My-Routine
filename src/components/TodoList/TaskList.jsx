import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { NoTask } from "./NoTask";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import { taskAction } from "../../redux-store/taskSlice";
let first = true;
function TaskList() {
     const todoHigh = useSelector((state) => state.taskReducer.todoHigh);
     const todoMedium = useSelector((state) => state.taskReducer.todoMedium);
     const todoLow = useSelector((state) => state.taskReducer.todoLow);
     const dispatch = useDispatch();
     useEffect(() => {
          // let taskFromLocal = JSON.parse(window.localStorage.getItem("taskArray"));
          // if (!taskFromLocal) {
          //      window.localStorage.setItem("taskArray", JSON.stringify([]));
          //      taskFromLocal = JSON.parse(window.localStorage.getItem("taskArray"));
          // }
          // console.log(taskFromLocal);
          // if (taskFromLocal.length !== 0) {
          //      dispatch(taskAction.updateTaskArray(taskFromLocal));
          // } else {
          //      window.localStorage.setItem("taskArray", JSON.stringify(taskArray));
          // }
     }, []);

     useEffect(() => {
          // window.localStorage.setItem("taskArray", JSON.stringify(taskArray));
     }, []);

     return (
          <Box m="auto" py="2" mx="2">
               <Center>
                    <Flex direction="column" gap="5">
                         {/* {taskArray.length !== 0 && taskArray.map((item) => <TaskItem key={item.id} id={item.id} {...item} />)} */}
                         {todoHigh.length !== 0 && todoHigh.map((item) => <TaskItem key={item.id} id={item.id} {...item} />)}
                         {todoMedium.length !== 0 && todoMedium.map((item) => <TaskItem key={item.id} id={item.id} {...item} />)}
                         {todoLow.length !== 0 && todoLow.map((item) => <TaskItem key={item.id} id={item.id} {...item} />)}
                         {todoHigh.length === 0 && todoMedium.length === 0 && todoLow.length === 0 && <NoTask />}
                    </Flex>
               </Center>
          </Box>
     );
}

export default TaskList;
