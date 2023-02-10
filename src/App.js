import "./App.css";
import Navigation from "./components/MainNavigation/Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainTodoHandle from "./components/TodoList/MainTodoHandle";
import TimeFocusHandler from "./components/TimeFocus/TimeFocusHandler";

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
                    path: "/timefocus",
                    element: <TimeFocusHandler />,
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
