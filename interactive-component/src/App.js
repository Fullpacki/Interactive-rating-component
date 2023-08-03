import Card from "./Components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Submit from "./Components/Submit";

function App() {
  return (
    <div className="App p-5">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Card />}></Route>
          <Route exact path="/rating-service" element={<Submit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
