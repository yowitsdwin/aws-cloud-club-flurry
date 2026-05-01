import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Events from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <Landing />
          }
        />

        {/* Events page */}
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;