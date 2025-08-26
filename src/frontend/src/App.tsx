import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@nfid/identitykit/react/styles.css";

import { IdentityKitProvider, IdentityKitTheme } from "@nfid/identitykit/react";
import { useState } from "react";
import { createActor, canisterId } from "../../declarations/backend";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

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
    <IdentityKitProvider
      signerClientOptions={{
        targets: [
          // add your canister IDs here
        ],
      }}
      theme={IdentityKitTheme.LIGHT}
      authType={"ACCOUNTS"}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </IdentityKitProvider>
  );
}

export default App;
