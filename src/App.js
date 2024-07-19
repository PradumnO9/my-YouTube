import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./redux/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";
import WatchPage from "./components/WatchPage/WatchPage";
import LiveChat from "./components/Comments/LiveChat";
import Login from "./components/Login";

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
        path: "live-chat",
        element: <LiveChat />
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
