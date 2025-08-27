import { backend } from "@/utils";
import { useQuery } from "@tanstack/react-query";


export default function useGetNotes(){
    const {data, isLoading, error} = useQuery({
        queryKey: ["notes"],
        queryFn: async () => {
            console.log(backend)
            return await backend.getNotes();
        }
    })
    return {data, isLoading, error}
}