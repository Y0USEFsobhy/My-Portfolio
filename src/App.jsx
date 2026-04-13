import Loader from "./components/Loader";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./layout/Applayout"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
}

export default App;
