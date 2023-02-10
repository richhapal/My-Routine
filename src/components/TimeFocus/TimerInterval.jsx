// import { useDispatch } from "react-redux";
// import { timeFocusActions } from "../../redux-store/timeFocusSlice";

// export const runningTimer = (MM, SS) => {
//      setInterval(() => {
//           let min = MM * 1;
//           let sec = SS * 1;
//           if (sec === 0 && min === 0) {
//                alert("time Completed");
//                clearInterval();
//                return;
//           }
//           if (sec == 0) {
//                if (min !== 0) {
//                     min--;
//                }
//                sec = 60;
//                sec--;
//           } else {
//                sec--;
//           }
//           disptach(timeFocusActions.updateDefaultTimeAlert({ min: min, sec: sec }));
//           console.log("update", typeof sec, typeof min);
//      }, 1000);
// };
