import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Home />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
