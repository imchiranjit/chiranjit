import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
