import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     addTodoListTask: false,
     taskValue: "",
     updateValue: "",
     isEdit: null,
     taskArray: [],
};

const task = createSlice({
     name: "task",
     initialState,
     reducers: {
          addTask(state, actions) {
               if (state.taskValue) {
                    const id = actions.payload.id;
                    state.taskArray.push({ value: state.taskValue, id: id });
                    state.taskValue = "";
               }
          },
          openTodoListTaskBox(state) {
               state.addTodoListTask = true;
          },
          closeTodoListTaskBox(state) {
               state.addTodoListTask = false;
          },
          updateTaskArray(state, actions) {
               state.taskArray = actions.payload;
          },
          readTask(state, actions) {
               state.taskValue = actions.payload;
               state.isEdit = "null";
               state.updateValue = "";
          },
          deleteTask(state, actions) {
               const id = actions.payload.id;
               const deleteTask = state.taskArray.filter((item) => item.id !== id);
               state.taskArray = deleteTask;
          },
          editTask(state, actions) {
               state.isEdit = actions.payload;
               const findValue = state.taskArray.find((item) => item.id === actions.payload);
               state.updateValue = findValue.value;
          },
          cancelEdit(state) {
               state.taskValue = "";
               state.isEdit = null;
               state.updateValue = "";
          },
          updateEditedTask(state, actions) {
               const id = actions.payload;
               for (let i = 0; i < state.taskArray.length; i++) {
                    if (state.taskArray[i].id === id) {
                         state.taskArray[i].value = state.updateValue;
                    }
               }
               state.updateValue = "";
               state.isEdit = null;
          },
          readUpdateTask(state, actions) {
               state.updateValue = actions.payload;
          },
     },
});

export const taskAction = task.actions;

export default task.reducer;
