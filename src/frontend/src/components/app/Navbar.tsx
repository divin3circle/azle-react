import { Github, Sun } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between mt-4 w-full">
      <div
        className="border-border border-[1px] rounded-full px-4 py-1.5 flex items-center justify-center gap-2"
        onClick={() =>
          window.open("https://github.com/divin3circle/azle-react", "_blank")
        }
      >
        <Github size={16} className="text-primary" />
        <h1 className="text-primary text-sm">Visit Github</h1>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="">
          <p className="text-sm">
            By{" "}
            <a
              href="https://github.com/divin3circle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-400 transition-all duration-200 ease-in"
            >
              @divin3circle
            </a>
          </p>
        </div>
        <div>
          <Sun size={24} className="text-primary curpo" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
