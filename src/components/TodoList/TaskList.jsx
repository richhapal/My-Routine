import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { NoTask } from "./NoTask";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import { taskAction } from "../../redux-store/todoSlice";
let first = true;
function TaskList() {
     const todoHigh = useSelector((state) => state.todoReducer.todoHigh);
     const todoMedium = useSelector((state) => state.todoReducer.todoMedium);
     const todoLow = useSelector((state) => state.todoReducer.todoLow);
     const dispatch = useDispatch();
     useEffect(() => {
          let todoHighLocal = JSON.parse(window.localStorage.getItem("todoHigh"));
          let todoMediumLocal = JSON.parse(window.localStorage.getItem("todoMedium"));
          let todoLowLocal = JSON.parse(window.localStorage.getItem("todoLow"));
          if (!todoHighLocal && !todoMediumLocal && !todoLowLocal) {
               window.localStorage.setItem("todoHigh", JSON.stringify([]));
               window.localStorage.setItem("todoMedium", JSON.stringify([]));
               window.localStorage.setItem("todoLow", JSON.stringify([]));
          }
          if (todoHighLocal.length !== 0 && todoMediumLocal.length !== 0 && todoLowLocal.length !== 0) {
               dispatch(taskAction.updateAllTodosFromLocalStorage({ priority: "high", arr: todoHighLocal }));
               dispatch(taskAction.updateAllTodosFromLocalStorage({ priority: "medium", arr: todoMediumLocal }));
               dispatch(taskAction.updateAllTodosFromLocalStorage({ priority: "low", arr: todoLowLocal }));
          } else {
               window.localStorage.setItem("todoHigh", JSON.stringify(todoHigh));
               window.localStorage.setItem("todoMedium", JSON.stringify(todoMedium));
               window.localStorage.setItem("todoLow", JSON.stringify(todoLow));
          }
     }, []);

     useEffect(() => {
          window.localStorage.setItem("todoHigh", JSON.stringify(todoHigh));
          window.localStorage.setItem("todoMedium", JSON.stringify(todoMedium));
          window.localStorage.setItem("todoLow", JSON.stringify(todoLow));
     }, [todoHigh, todoLow, todoMedium]);

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
