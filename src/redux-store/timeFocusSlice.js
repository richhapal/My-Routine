import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     defaultSelect: true,
     shortSelect: false,
     longSelect: false,
     defaultTimeMinute: "55",
     defaultTimeSecond: "00",
     shortTimeMinute: "05",
     shortTimeSecond: "00",
     longTimeMinute: "15",
     longTimeSecond: "00",
     // timeIntervalPause:
};

const timeFocusSlice = createSlice({
     name: "timeFocus",
     initialState,
     reducers: {
          updateTimeSelector(state, actions) {
               const selector = actions.payload.toLowerCase();
               if (selector.includes("default")) {
                    state.defaultSelect = true;
                    state.shortSelect = false;
                    state.longSelect = false;
                    console.log("default");
               } else if (selector.includes("short")) {
                    state.defaultSelect = false;
                    state.shortSelect = true;
                    state.longSelect = false;
                    console.log("short");
               } else {
                    state.defaultSelect = false;
                    state.shortSelect = false;
                    state.longSelect = true;
                    console.log("long");
               }
          },
          updateDefaultTimeAlert(state, actions) {
               let min = actions.payload.min.toString();
               let sec = actions.payload.sec.toString();
               if (min.length == 1) {
                    min = "0" + min;
               }
               if (sec.length == 1) {
                    sec = "0" + sec;
               }
               state.defaultTimeMinute = min.toString();
               state.defaultTimeSecond = sec.toString();
               // console.log(actions.payload.min, actions.payload.sec);
          },
     },
});

export const runningTimer = (MM, SS) => {
     return (dispatch) => {
          let min = MM * 1;
          let sec = SS * 1;

          if (sec === 0 && min === 0) {
               alert("time Completed");
          }
          if (sec !== 0) {
               sec--;
          } else {
               console.log("else true-------");
               if (min !== 0) {
                    min--;
               }
               sec = 60;
               sec--;
          }
          console.log(min, sec);
          dispatch(timeFocusActions.updateDefaultTimeAlert({ min: min, sec: sec }));
          console.log("update", typeof sec, typeof min);
     };
};

export const timeFocusActions = timeFocusSlice.actions;
export default timeFocusSlice.reducer;
