import "./App.css";
import { Fragment } from "react";
import Navigation from "./components/MainNavigation/Navigation";
import InputFiled from "./components/InputFiled";
import TaskList from "./components/TaskList";
import TaskCategory from "./components/TaskCategory/TaskCategory";
import TaskPanel from "./components/TaskPanel/TaskPanel";

function App() {
     return (
          <Fragment>
               <Navigation />
               <TaskCategory />
               <TaskPanel />
               {/* <InputFiled />

               <TaskList /> */}
          </Fragment>
     );
}

export default App;
