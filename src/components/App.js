import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/:id" Component={Detail}></Route>
      </Routes>
    </Router>
  );
}
