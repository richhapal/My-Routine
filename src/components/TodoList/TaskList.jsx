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
          let todoHighLocal = JSON.parse(localStorage.getItem("todoHigh"));
          let todoMediumLocal = JSON.parse(localStorage.getItem("todoMedium"));
          let todoLowLocal = JSON.parse(localStorage.getItem("todoLow"));
          // console.log("todoHighArray1", todoHighLocal, todoMediumLocal, todoLowLocal);
          if (!todoHighLocal && !todoMediumLocal && !todoLowLocal) {
               localStorage.setItem("todoHigh", JSON.stringify([]));
               localStorage.setItem("todoMedium", JSON.stringify([]));
               localStorage.setItem("todoLow", JSON.stringify([]));
               todoHighLocal = JSON.parse(localStorage.getItem("todoHigh"));
               todoMediumLocal = JSON.parse(localStorage.getItem("todoMedium"));
               todoLowLocal = JSON.parse(localStorage.getItem("todoLow"));
          }

          // console.log("todoHighArray2", todoHighLocal, todoMediumLocal, todoLowLocal);
          if (todoHighLocal.length !== 0 || todoMediumLocal.length !== 0 || todoLowLocal.length !== 0) {
               // console.log("todoHighArray3", todoHighLocal, todoMediumLocal, todoLowLocal);
               dispatch(taskAction.updateAllTodosFromLocalStorage({ priority: "high", arr: todoHighLocal }));
               dispatch(taskAction.updateAllTodosFromLocalStorage({ priority: "medium", arr: todoMediumLocal }));
               dispatch(taskAction.updateAllTodosFromLocalStorage({ priority: "low", arr: todoLowLocal }));
          } else {
               localStorage.setItem("todoHigh", JSON.stringify(todoHigh));
               localStorage.setItem("todoMedium", JSON.stringify(todoMedium));
               localStorage.setItem("todoLow", JSON.stringify(todoLow));
          }
     }, []);

     useEffect(() => {
          localStorage.setItem("todoHigh", JSON.stringify(todoHigh));
          localStorage.setItem("todoMedium", JSON.stringify(todoMedium));
          localStorage.setItem("todoLow", JSON.stringify(todoLow));
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
