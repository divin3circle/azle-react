import { backend } from "@/utils";
import { useQuery } from "@tanstack/react-query";


export default function useGetNotes(){
    const {data, isLoading, error} = useQuery({
        queryKey: ["notes"],
        queryFn: async () => {
            return await backend.getNotes();
        }
    })
    return {data, isLoading, error}
}