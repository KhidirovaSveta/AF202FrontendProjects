import { Route, Routes } from "react-router-dom";
import SingUp from "./components/signup";
import Signİn from "./components/signin";
import Users from "./components/users";
import Header from "./layouts/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signin" element={<Signİn />} />
        <Route path="/" element={<SingUp />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
