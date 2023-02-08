import React from "react";
import { Box, Text, Flex, Button, Input, Spacer } from "@chakra-ui/react";
import { MdDone, MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../redux-store/todoSlice";
export const ShowEdit = (props) => {
     const taskValue = useSelector((state) => state.todoReducer.updateValue);
     const dispatch = useDispatch();
     const cancelHandler = () => {
          dispatch(taskAction.cancelEdit());
     };
     const doneHandler = (e, priority) => {
          dispatch(taskAction.updateEditedTask({ id: e.target.id, priority: priority }));
     };
     const taskValueHandler = (e) => {
          dispatch(taskAction.readUpdateTask(e.target.value));
     };

     return (
          <Flex gap={[1, 1, 2, 3]} justifyContent="center" alignItems="center" w="100%">
               {/* <Text>{props.value}</Text> */}
               <Box flex="1">
                    <Input type="text" maxLength="35" variant="flushed" value={taskValue} size={["sm", "md"]} onChange={taskValueHandler} />
               </Box>
               {/* <Spacer /> */}
               <Box>
                    <Button variant="primary" size={["xs", "sm", "md"]} id={props.id} mx={1} onClick={(e) => doneHandler(e, props.priority)}>
                         <MdDone />
                    </Button>

                    <Button variant="primary" size={["xs", "sm", "md"]} id={props.id} onClick={cancelHandler}>
                         <MdCancel />
                    </Button>
               </Box>
          </Flex>
     );
};
