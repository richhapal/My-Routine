import "./App.css";
import { Fragment } from "react";
import Navigation from "./components/MainNavigation/Navigation";
import TaskPanel from "./components/TaskPanel/TaskPanel";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainTodoHandle from "./components/TodoList/MainTodoHandle";

const routers = createBrowserRouter([
     {
          path: "/",
          element: <Navigation />,
          children: [
               {
                    path: "/",
                    element: <MainTodoHandle />,
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
