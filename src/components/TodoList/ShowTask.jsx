import React from "react";
import { Box, Text, Flex, Button, IconButton, Badge } from "@chakra-ui/react";
import { DeleteIcon, SearchIcon } from "@chakra-ui/icons";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../redux-store/taskSlice";
import { IconContext } from "react-icons";

export const ShowTask = (props) => {
     const dispatch = useDispatch();

     const deleteHandler = (event, priority) => {
          dispatch(taskAction.deleteTask({ id: event.target.id, priority: priority }));
     };
     const editHandler = (e, priority) => {
          dispatch(taskAction.editTask({ id: e.target.id, priority: priority }));
     };
     return (
          <Flex gap={[1, 1, 2, 3]} flexDir="column">
               <Flex gap={[1, 1, 2, 3]} justifyContent="center">
                    {props.time && (
                         <Badge colorScheme="teal" variant="solid">
                              {props.time}
                         </Badge>
                    )}
                    <Badge bg={props.priority === "high" ? "#00ff1fd4" : "#6c6c6c6e"} variant="solid">
                         {props.priority}
                    </Badge>
                    <Badge>{props.date}</Badge>
               </Flex>

               <Flex gap={[1, 1, 2, 3]}>
                    <Text flex="1" fontWeight={["semibold", "bold"]} wordBreak>
                         {props.value}
                    </Text>

                    <Button variant="primary" size={["sm", "md"]} onClick={(e) => editHandler(e, props.priority)} id={props.id}>
                         EDIT
                    </Button>

                    <Button variant="primary" size={["sm", "md"]} onClick={(e) => deleteHandler(e, props.priority)} id={props.id}>
                         DELETE
                    </Button>
               </Flex>
          </Flex>
     );
};
