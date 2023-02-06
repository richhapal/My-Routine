import React from "react";
import { Box, Text, Flex, Button, Input, Spacer } from "@chakra-ui/react";
import { MdDone, MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../redux-store/taskSlice";
export const ShowEdit = (props) => {
     const taskValue = useSelector((state) => state.taskReducer.updateValue);
     const dispatch = useDispatch();
     const cancelHandler = () => {
          dispatch(taskAction.cancelEdit());
     };
     const doneHandler = (e) => {
          dispatch(taskAction.updateEditedTask(e.target.id));
     };
     const taskValueHandler = (e) => {
          dispatch(taskAction.readUpdateTask(e.target.value));
     };

     return (
          <Flex
               gap={[1, 1, 2, 3]}
               justifyContent="center"
               alignItems="center"
               w="100%"
          >
               {/* <Text>{props.value}</Text> */}
               <Box flex="1">
                    <Input
                         type="text"
                         variant="flushed"
                         value={taskValue}
                         size={["sm", "md"]}
                         // value={taskValue}
                         onChange={taskValueHandler}
                    />
               </Box>
               {/* <Spacer /> */}
               <Box>
                    <Button
                         variant="primary"
                         size={["sm", "md"]}
                         id={props.id}
                         mx={1}
                         onClick={doneHandler}
                    >
                         <MdDone />
                    </Button>

                    <Button
                         variant="primary"
                         size={["sm", "md"]}
                         id={props.id}
                         onClick={cancelHandler}
                    >
                         <MdCancel />
                    </Button>
               </Box>
          </Flex>
     );
};