import { Button } from "@/components/ui/button";
import useConnectWallet from "@/hooks/useConnectWallet";

function Dashboard() {
  const { disconnect, user } = useConnectWallet();
  return (
    <div className="h-screen max-w-7xl mx-auto px-2">
      <div className="flex items-center justify-between mt-4">
        <Button variant="outline" className="rounded-3xl" onClick={disconnect}>
          <p className="text-sm text-muted-foreground">
            Connected as:{" "}
            <span className="font-medium text-primary">
              {user?.principal.toString().slice(0, 6)}...
              {user?.principal.toString().slice(-4)}
            </span>
          </p>
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
