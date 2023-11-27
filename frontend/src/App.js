import Form from "./components/Form";
import { Route,Routes } from "react-router-dom";
import Mainstream from "./pages/Mainstream";

import Page1 from "./pages/Page1";
function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Mainstream/>}>
           <Route index element={<Form/>}/>
           <Route path="/list" element={<Page1/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
