import {
     Box,
     Input,
     InputGroup,
     FormLabel,
     FormControl,
     Center,
     Button,
     Flex,
     useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { taskAction } from "../../redux-store/taskSlice";

const InputFiled = () => {
     const { colorMode, toggleColorMode } = useColorMode();
     const taskValue = useSelector((state) => state.taskReducer.taskValue);
     const dispatch = useDispatch();
     const taskHandler = () => {
          const id = uuidv4();
          dispatch(taskAction.addTask({ id: id }));
     };
     const taskValueHandler = (e) => {
          dispatch(taskAction.readTask(e.target.value));
     };

     return (
          <Box m="auto" py="5" mx="2">
               <Center>
                    <FormControl width={["sm", "md", "lg", "xl"]}>
                         <Flex gap="3">
                              <Input
                                   type="text"
                                   placeholder="Enter Your Task"
                                   _placeholder={{
                                        color:
                                             colorMode === "dark"
                                                  ? "primary"
                                                  : "black",
                                        fontWeight: "bold",
                                   }}
                                   border="2px solid"
                                   // borderColor="primary"
                                   value={taskValue}
                                   onChange={taskValueHandler}
                              />
                              <Button variant="primary" onClick={taskHandler}>
                                   <FaPlus />
                              </Button>
                         </Flex>
                    </FormControl>
               </Center>
          </Box>
     );
};

export default InputFiled;
