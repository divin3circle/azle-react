import { backend } from "@/utils";
import { useAuth } from "@nfid/identitykit/react";
import { useQuery } from "@tanstack/react-query";


export default function useGetNotes(){
    const {user} = useAuth();
    const {data, isLoading, error} = useQuery({
        queryKey: ["notes"],
        queryFn: async () => {
            if(!user) return [];
            return await backend.getNotes(user.principal);
        },
        enabled: !!user
    })
    return {data, isLoading, error}
}