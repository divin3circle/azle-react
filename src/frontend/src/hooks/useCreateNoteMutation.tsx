import { backend } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@nfid/identitykit/react";



export default function useCreateNoteMutation() {
  const {user} = useAuth();
  const queryClient = useQueryClient()
  const {mutate:mutation, isPending, isSuccess} = useMutation({
    mutationFn: async (message: string) => {
      if(!user) return false;
      const response = await backend.setNote(user.principal, message);
      return response;
    },
    onSuccess: () => {
      toast.success("Note created successfully!");
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
