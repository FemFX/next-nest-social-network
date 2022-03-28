import "./App.scss";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

const App: React.FC = (): JSX.Element => {
  async function fetchData() {
    const res = await axios.get("http://localhost:4000/post");
    console.log(res.data);
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
