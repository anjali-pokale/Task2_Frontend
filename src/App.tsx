import React from "react";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import ImpTasks from "./pages/ImpTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompletedTasks from "./pages/IncompletedTasks";

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<AllTasks />} />
            <Route path="/importantTasks" element={<ImpTasks />} />
            <Route path="/completedTasks" element={<CompletedTasks />} />
            <Route path="/incompletedTasks" element={<IncompletedTasks />} />

          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          
        </Routes>
      </Router>
    
    </div>
  );
};

export default App;
