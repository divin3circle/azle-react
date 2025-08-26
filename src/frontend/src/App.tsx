import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import { createActor, canisterId } from "../../declarations/backend";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
  // const [greeting, setGreeting] = useState("");

  // function handleSubmit(event: any) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   const backend = createActor(canisterId);
  //   backend.greet(name).then((greeting: any) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
