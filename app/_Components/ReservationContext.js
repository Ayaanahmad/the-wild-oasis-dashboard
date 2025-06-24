"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: "", to: "" };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside of the scope");
  return context;
}

export { ReservationProvider, useReservation };
