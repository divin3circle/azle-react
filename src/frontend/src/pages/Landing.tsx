import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  function handleConnect() {
    navigate("/dashboard");
  }
  return (
    <div className="h-screen flex items-center justify-center bg-[#060609]">
      <div className="rounded-2xl  border border-gray-500 p-4">
        <div className="rounded-2xl bg-primary p-4">
          <h1 className="text-2xl font-bold text-[#eb7b07]">
            Azle Ethereum Explorer
          </h1>
          <p className="text-sm text-gray-400 mt-1 mb-4">
            Connect to the Ethereum blockchain by providing an RPC url below.
          </p>
          <Input
            placeholder="Enter RPC url"
            className="h-12 bg-primary border border-gray-600 rounded-2xl mb-4 mt-8 w-full text-gray-400"
          />
          <Button
            className="w-full  bg-foreground h-12 rounded-2xl mt-4 text-[#eb7b07] hover:bg-foreground/90"
            onClick={handleConnect}
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
