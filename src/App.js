import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainContainer from "./components/MainContainer/MainContainer";
import WatchPage from "./components/WatchPage/WatchPage";
import Body from "./components/Body";
import LiveChat from "./components/Comments/LiveChat";
import Login from "./components/Login";
import appStore from "./redux/appStore";
import CommentsContainer from "./components/Comments/CommentsContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
      {
        path: "/live-chat",
        element: <LiveChat />
      },
      {
        path: "/nested-comments",
        element: <CommentsContainer />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
