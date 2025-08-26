import { useNavigate } from "react-router-dom";
import Navbar from "@/components/app/Navbar";
import { azleLogo, viteLogo } from "@/exports";

function Body() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="flex items-center gap-2">
        <img src={viteLogo} alt="Vite logo" className="h-44" />
        <h1 className="font-bold text-6xl text-primary">+</h1>
        <img src={azleLogo} alt="Azle logo" className="h-44" />
      </div>
      <h2 className="text-2xl text-primary mt-4 font-semibold">
        React + Vite + Azle
      </h2>
      <h2 className="text-primary mt-2 text-sm">
        Starter template for building React apps with Azle
      </h2>
    </div>
  );
}

function Landing() {
  const navigate = useNavigate();

  function handleConnect() {
    navigate("/dashboard");
  }
  return (
    <div className="max-w-[1240px] mx-auto my-0 px-4 h-screen flex-col items-start flex">
      <Navbar />
      <Body />
    </div>
  );
}

export default Landing;
