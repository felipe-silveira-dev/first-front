import {
  BrowserRouter,
} from "react-router-dom";
import { Router } from "./pages/Router";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
