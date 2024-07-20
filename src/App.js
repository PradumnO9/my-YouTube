import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Body from "./components/Body";
import Login from "./components/Login";
import appStore from "./redux/appStore";
import LoadingSpinner from "./utils/LoadingSpinner";
import Shimmer from "./utils/Shimmer";

const LiveChat = lazy(() => import("./components/Comments/LiveChat"));
const WatchPage = lazy(() => import("./components/WatchPage/WatchPage"));
const CommentsContainer = lazy(() =>
  import("./components/Comments/CommentsContainer")
);
const MainContainer = lazy(() =>
  import("./components/MainContainer/MainContainer")
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <MainContainer />
          </Suspense>
        ),
      },
      {
        path: "/watch",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/live-chat",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LiveChat />
          </Suspense>
        ),
      },
      {
        path: "/nested-comments",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CommentsContainer />
          </Suspense>
        ),
      },
    ],
  },
]);

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
