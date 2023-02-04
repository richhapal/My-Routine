import "./App.css";
import { Fragment } from "react";
import Navigation from "./components/Navigation";
import InputFiled from "./components/InputFiled";
import TaskList from "./components/TaskList";

function App() {
     return (
          <Fragment>
               <Navigation />
               <InputFiled />
               <TaskList />
          </Fragment>
     );
}

export default App;
