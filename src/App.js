

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDb from "./MovieDbApp/MovieDb";
import Card from "./CardGame/Card"
import Layout from "./Layout";
import Toss from "./Toss/Toss"
function App() {
    return (
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/MovieDb" element={<MovieDb/>} />
          <Route path="/cardgame" element={<Card/>} />
          <Route path="/toss" element={<Toss/>} />

          </Route>
      </Routes>
     </BrowserRouter>
      );
    }
    
    export default App;