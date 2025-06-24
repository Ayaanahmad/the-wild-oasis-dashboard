import React from "react";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_Components/Header";
import { ReservationProvider } from "./_Components/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis"
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome to The Wild Oasis",
  },

  descriptions: "Luxurious hotel loacted in the heart of Bihar, Patna",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
