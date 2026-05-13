import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="font-sans">
      <Toaster />

      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default App;