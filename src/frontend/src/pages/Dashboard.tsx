import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { azleLogo, viteLogo } from "@/exports";
import useConnectWallet from "@/hooks/useConnectWallet";
import useGetNotes from "@/hooks/useGetNotes";
import useCreateNoteMutation from "@/hooks/useCreateNoteMutation";
import { Loader2, Sun } from "lucide-react";
import { useState } from "react";


function Dashboard() {
  const { disconnect, user } = useConnectWallet();
  const {isPending, isSuccess, mutation:createNote} = useCreateNoteMutation();
  const [note, setNote] = useState("");
  const { data, isLoading, error } = useGetNotes();

  if(error){
    return (
      <div className="h-screen max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm text-muted-foreground">
            {error.message}
          </p>
        </div>
      </div>
    )
  }

  const handleCreateNote = () => {
    console.log(note);
    createNote(note);
    setNote("");
  }

  return (
    <div className="h-screen max-w-7xl mx-auto px-2">
      <div className="flex items-center justify-between mt-4">
        <Button variant="outline" className="rounded-3xl" onClick={disconnect}>
          <p className="text-sm text-muted-foreground">
            Connected as:{" "}
            <span className="font-medium ">
              {user?.principal.toString().slice(0, 6)}...
              {user?.principal.toString().slice(-4)}
            </span>
          </p>
        </Button>
        <div>
          <Sun size={24} className="cursor-pointer" onClick={() => {
            document.body.classList.toggle("dark");
          }} />
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center w-full mt-12">
        <img src={viteLogo} alt="Vite logo" className="h-12" />
        <h1 className="font-bold text-3xl ">+</h1>
        <img src={azleLogo} alt="Azle logo" className="h-12" />
      </div>
      <h2 className="text-2xl text-center  mt-4 font-semibold">
        Simple Note Taker
      </h2>
      <h2 className=" mt-2 text-center text-sm">
        A simple note-taking app built with React and Azle(Typescript)
      </h2>
      <div className="mt-12 flex flex-col items-center w-full">
        <div className="flex w-full max-w-lg items-center gap-2">
          <Input type="text" placeholder="Enter Message Here" maxLength={50} value={note} onChange={(e) => setNote(e.target.value)} />
          <Button type="submit" variant="outline" className="text-sm text-black" onClick={handleCreateNote} disabled={!note} >
            {isPending ? <Loader2 className="animate-spin" /> : "Save Note"}
          </Button>
        </div>
      </div>
      <div className="border-t border-muted mt-12 pt-4 max-w-xl my-0 mx-auto flex flex-col items-start w-full">
        <h3 className="text-xl font-semibold ">My Notes</h3>
        <ul className="mt-2 w-full">
          {data && data.length > 0 && data.map((note, index) => (
         <li className="border-b border-muted py-2 w-full mt-2" key={index}>
         <span className="font-medium">#{note.id}</span>
         <div className="flex items-center justify-between w-full">
           <p className="text-sm text-muted-foreground">
             {note.content}
           </p>
           <p className="text-xs text-muted-foreground">
             {new Date(Number(note.createdAt)).toLocaleString()}
           </p>
         </div>
       </li>
          ))}
          {isLoading && !data && (
            <li className="border-b border-muted py-2 w-full mt-2">
              <Loader2 className="animate-spin" />
            </li>
          )}
        </ul>
        <p className="text-sm text-muted-foreground mt-8 text-center w-full">
          You have {data && data.length} notes.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
