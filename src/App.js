import "./App.css";
import { Fragment } from "react";
import Navigation from "./components/MainNavigation/Navigation";
import InputFiled from "./components/TodoList/InputFiled";
import TaskList from "./components/TodoList/TaskList";
import TaskCategory from "./components/MainNavigation/TaskCategory";
import TaskPanel from "./components/TaskPanel/TaskPanel";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routers = createBrowserRouter([
     {
          path: "/",
          element: <Navigation />,
          children: [
               {
                    path: "/",
                    element: (
                         <TaskPanel>
                              <InputFiled />
                              <TaskList />
                         </TaskPanel>
                    ),
               },
               {
                    path: "/dailyroutine",
                    element: <TaskPanel></TaskPanel>,
               },
               {
                    path: "/dailynotes",
                    element: <TaskPanel></TaskPanel>,
               },
               {
                    path: "/email",
                    element: <TaskPanel></TaskPanel>,
               },
          ],
     },
]);

function App() {
     return <RouterProvider router={routers} />;
}

export default App;

{
     /* <RouterProvider router={routers} /> */
}
{
     /* <TaskPanel /> */
}
{
     /* <InputFiled />

               <TaskList /> */
}
// </RouterProvider>
