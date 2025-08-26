import { useAuth } from "@nfid/identitykit/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function useConnectWallet() {
  const { connect, disconnect, isConnecting, user } = useAuth();
  useEffect(() => {
    if (user) {
      toast.success("Successfully connected wallet!");
      navigate("/dashboard");
    }
    if (!user) {
      toast.success("Successfully disconnected wallet!");
      navigate("/");
    }
  }, [user]);
  const navigate = useNavigate();
  const loginAndNavigate = async () => {
    await connect();
  };
  const disconnectAndNavigate = async () => {
    await disconnect();
  };

  return {
    loginAndNavigate,
    isConnecting,
    disconnect: disconnectAndNavigate,
    user,
  };
}
