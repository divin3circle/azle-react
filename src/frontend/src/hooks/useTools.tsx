import { TOOLS } from "@/mocks/tools";
import { useQuery } from "@tanstack/react-query";

export default function useTools() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tools"],
    queryFn: async () => {
      return fetchTools();
    },
  });
  return { data, isLoading, error };
}

async function fetchTools() {
  return TOOLS;
}
