import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     addTodoListTask: false,
     taskPriority: "low",
     timeAlert: "",
     taskValue: "",
     updateValue: "",
     isEdit: null,
     todoHigh: [],
     todoMedium: [],
     todoLow: [],
};

const task = createSlice({
     name: "task",
     initialState,
     reducers: {
          addTask(state, actions) {
               if (state.taskValue) {
                    const id = actions.payload.id;
                    const date = actions.payload.date;
                    const todo = { value: state.taskValue, id: id, time: state.timeAlert, date: date, priority: state.taskPriority };
                    switch (state.taskPriority) {
                         case "high":
                              state.todoHigh.push(todo);
                              // state.taskHashMap. = { priority: "high", index: state.todoHigh.length - 1 };
                              break;
                         case "medium":
                              state.todoMedium.push(todo);
                              // state.taskHashMap.id = { priority: "medium", index: state.todoMedium.length - 1 };
                              break;
                         case "low":
                              state.todoLow.push(todo);
                              // state.taskHashMap.id = { priority: "low", index: state.todoLow.length - 1 };
                              break;
                    }
                    // state.taskArray.push();
                    state.taskValue = "";
                    state.taskPriority = "low";
                    state.timeAlert = "";
                    state.addTodoListTask = false;
               }
          },
          addTimeAlert(state, actions) {
               state.timeAlert = actions.payload;
          },
          openTodoListTaskBox(state) {
               state.addTodoListTask = true;
          },
          closeTodoListTaskBox(state) {
               state.addTodoListTask = false;
               state.taskPriority = "low";
               state.taskValue = "";
          },
          updateTaskPriority(state, actions) {
               state.taskPriority = actions.payload;
          },
          updateAllTodosFromLocalStorage(state, actions) {
               const priority = actions.payload.priority;
               const arr = actions.payload.arr;
               switch (priority) {
                    case "high":
                         state.todoHigh = arr;
                    case "medium":
                         state.todoMedium = arr;
                    default:
                         state.todoLow = arr;
               }
          },
          readTask(state, actions) {
               state.taskValue = actions.payload;
               state.isEdit = "null";
               state.updateValue = "";
          },
          deleteTask(state, actions) {
               console.log(actions.payload);
               const id = actions.payload.id;
               const priority = actions.payload.priority;
               switch (priority) {
                    case "high":
                         const deleteTodoHigh = state.todoHigh.filter((item) => item.id !== id);
                         state.todoHigh = deleteTodoHigh;
                         break;
                    case "medium":
                         const deleteTodoMedium = state.todoMedium.filter((item) => item.id !== id);
                         state.todoMedium = deleteTodoMedium;
                         break;
                    case "low":
                         console.log("low");
                         const deleteTodoLow = state.todoLow.filter((item) => item.id !== id);
                         state.todoLow = deleteTodoLow;
                         break;
               }
          },
          editTask(state, actions) {
               console.log(actions);
               const id = actions.payload.id;
               state.isEdit = id;
               const priority = actions.payload.priority;
               let editTodoTask;
               switch (priority) {
                    case "high":
                         editTodoTask = state.todoHigh.find((item) => item.id === id);
                         break;
                    case "medium":
                         editTodoTask = state.todoMedium.find((item) => item.id === id);
                         break;
                    default:
                         editTodoTask = state.todoLow.find((item) => item.id === id);
                         break;
               }
               state.updateValue = editTodoTask.value;
          },
          cancelEdit(state) {
               state.taskValue = "";
               state.isEdit = null;
               state.updateValue = "";
          },
          updateEditedTask(state, actions) {
               const id = actions.payload.id;
               const priority = actions.payload.priority;
               switch (priority) {
                    case "high":
                         for (let i = 0; i < state.todoHigh.length; i++) {
                              if (state.todoHigh[i].id === id) {
                                   state.todoHigh[i].value = state.updateValue;
                                   break;
                              }
                         }
                         break;
                    case "medium":
                         for (let i = 0; i < state.todoMedium.length; i++) {
                              if (state.todoMedium[i].id === id) {
                                   state.todoMedium[i].value = state.updateValue;
                                   break;
                              }
                         }
                         break;
                    default:
                         for (let i = 0; i < state.todoLow.length; i++) {
                              if (state.todoLow[i].id === id) {
                                   state.todoLow[i].value = state.updateValue;
                                   break;
                              }
                         }
                         break;
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
