import { useNavigate } from "react-router-dom";
import Navbar from "@/components/app/Navbar";
import { azleLogo, viteLogo } from "@/exports";
import { Button } from "@/components/ui/button";
import { Book, ExternalLink, Link, Loader } from "lucide-react";
import useTools from "@/hooks/useTools";

function Body() {
  return (
    <div className="flex flex-col items-center justify-center mt-32 h-full w-full">
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
      <div className="flex items-center flex-col md:flex-row mt-8 gap-4 md:gap-8">
        <Button variant="default">Explore Demo</Button>
        <Button
          variant="link"
          className="flex items-center gap-1 justify-center"
          onClick={() =>
            window.open(
              "https://demergent-labs.github.io/azle/the_azle_book.html",
              "_blank"
            )
          }
        >
          Azle Documentation
          <Book className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function Tools() {
  const { data, isLoading, error } = useTools();

  if (isLoading) {
    return (
      <div className="w-ful h-full flex items-center justify-center mt-16 mb-4">
        <Loader className="animate-spin text-primary" />
      </div>
    );
  }
  if (error || !data) {
    return (
      <div className="w-full h-full flex items-center justify-center mt-16 mb-4">
        <p className="text-red-500">Error loading tools: {error?.message}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 mt-16">
      {data &&
        data.map((tool) => (
          <div
            key={tool.name}
            className="border rounded-3xl p-4 border-border flex items-center gap-2"
          >
            <img
              src={tool.icon}
              alt={`${tool.name} logo`}
              className="h-12 w-12"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm">{tool.name}</h3>
                <a
                  href={tool.link}
                  target="_blank"
                  className="text-primary text-sm"
                >
                  <Link size={14} />
                </a>
              </div>
              <p className="text-primary text-sm">{tool.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

function Landing() {
  const navigate = useNavigate();

  function handleConnect() {
    navigate("/dashboard");
  }
  return (
    <div className="max-w-7xl mx-auto my-0 px-4 min-h-screen flex-col items-start flex">
      <Navbar />
      <Body />
      <Tools />
      <div className="my-4 flex items-center justify-center flex-col w-full text-sm text-muted-foreground">
        And many more...
      </div>
    </div>
  );
}

export default Landing;
