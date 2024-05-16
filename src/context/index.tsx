"use client";
import { allConvos, getConversation } from "@/lib/actions";
import mongoose from "mongoose";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";

const AppContext = createContext<any>("");
export type Message = {
  id?: string;
  role: string;
  content: string;
  createdAt?: Date;
};

export type Conversation = {
  _id: string;
  messages: Message[];
  createdAt: Date;
  customData?: any;
};
export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [query, setQuery] = useState("Syntax");
  let [chatId, setChatId] = useState("");
  let [newChat, setNewChat] = useState(false);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        chatId,
        setChatId,
        newChat,
        setNewChat,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
