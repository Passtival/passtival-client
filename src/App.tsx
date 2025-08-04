import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;