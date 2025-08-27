import { backend } from "@/utils";
import { useMutation, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateNoteMutation() {
  const {mutate:mutation, isPending, isSuccess} = useMutation({
    mutationFn: async (message: string) => {
      const response = await backend.setNote(message);
      return response;
    },
    onSuccess: () => {
      toast.success("Note created successfully!");
      const queryClient = new QueryClient();
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error) => {
      toast.error(`Error creating note: ${error.message}`);
    },
    onSettled: () => {
      console.log("Note creation process completed");
    },
  });
  return {mutation, isPending, isSuccess};
}
