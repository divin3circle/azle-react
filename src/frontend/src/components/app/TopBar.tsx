import { Power } from "lucide-react";

const latestBlock = 123456;

function TopBar() {
  return (
    <div className="sticky top-0 z-10 bg-[#060609] flex items-center justify-between px-4 py-2 w-full">
      <div className="font-bold text-xl text-[#eb7b07]">
        Azle Ethereum Explorer
      </div>
      <div className="flex items-center gap-4">
        <span className="text-muted-foreground">Latest Block:</span>{" "}
        <span className="font-mono text-gray-400">#{latestBlock}</span>
        <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-2 py-1">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <h1 className="text-green-400 text-sm">Connected</h1>
        </div>
        <Power className="w-6 h-6 text-[#eb7b07]" />
      </div>
    </div>
  );
}

export default TopBar;
