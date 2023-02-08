import React from "react";
import TaskPanel from "../TaskPanel/TaskPanel";
import InputFiled from "./InputFiled";
import TaskList from "./TaskList";

export const MainTodoHandle = () => {
     return (
          <div>
               <TaskPanel>
                    <InputFiled />
                    <TaskList />
               </TaskPanel>
          </div>
     );
};

export default MainTodoHandle;
