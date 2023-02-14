import "./App.css";
import Sidebar from "./Layouts/Sidebar";
import Topbar from "./Layouts/Topbar";
import Rute from "./Router";

function App() {
  return (
    <>
      <Topbar />
      <div className="flex-1 bg-gray-100">
        <Sidebar />
        <div className="absolute left-64 top-24 z-0">
          <Rute />
        </div>
      </div>
    </>
  );
}

export default App;
