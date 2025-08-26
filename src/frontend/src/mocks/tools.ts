import {
  motion,
  nfid,
  reactRouter,
  shadcnui,
  tailwindcss,
  tanstack,
  zustand,
} from "@/exports";
import { Tool } from "@/types";

export const TOOLS: Tool[] = [
  {
    name: "React Router",
    description: "Declarative routing for React",
    icon: reactRouter,
    link: "https://reactrouter.com/",
  },
  {
    name: "Shadcn UI",
    description: "A set of high-quality UI components for React",
    icon: shadcnui,
    link: "https://ui.shadcn.com/",
  },
  {
    name: "Framer Motion",
    description: "A library for creating animations in React",
    icon: motion,
    link: "https://www.framer.com/docs/",
  },
  {
    name: "Zustand",
    description: "A small, fast, and scalable state-management solution",
    icon: zustand,
    link: "https://github.com/pmndrs/zustand",
  },
  {
    name: "Tanstack Query",
    description: "Powerful data fetching and synchronization for React",
    icon: tanstack,
    link: "https://tanstack.com/query/latest",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for creating custom designs",
    icon: tailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    name: "NFID",
    description: "A secure and easy way to manage your digital identity",
    icon: nfid,
    link: "https://identitykit.xyz/docs/",
  },
];
