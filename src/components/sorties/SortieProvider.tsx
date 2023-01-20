import React, { useState, createContext } from "react";
import ISortie from "../types/Isortie";

interface ISortieContext {
  sortiesContext: ISortie[];
  setSortiesContext: React.Dispatch<React.SetStateAction<ISortie[]>>;
  sortieEnModification: ISortie | null;
  setSortieEnModification: React.Dispatch<React.SetStateAction<ISortie | null>>;
}

interface Iprops {
  children: React.ReactNode;
}

export const sortieContext = createContext<ISortieContext>(
  {} as ISortieContext
);

export default function SortieProvider({ children }: Iprops) {
  const [sortiesContext, setSortiesContext] = useState<ISortie[]>([]);
  const [sortieEnModification, setSortieEnModification] =
    useState<ISortie | null>(null);

  return (
    <sortieContext.Provider
      value={{
        sortiesContext,
        setSortiesContext,
        sortieEnModification,
        setSortieEnModification,
      }}
    >
      {children}
    </sortieContext.Provider>
  );
}
