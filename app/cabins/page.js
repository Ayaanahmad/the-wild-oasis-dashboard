import { Suspense } from "react";
import CabinList from "../_Components/CabinList";
import Spinner from "../_Components/Spinner";
import Filter from "../_Components/Filter";
import ReservationReminder from "../_Components/ReservationReminder";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  // CHANGE
  const filter = searchParams?.capacity ?? "all";
  console.log("Test page render at", new Date().toISOString());
  return (
    <div className="overflow-hidden">
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter linkParams={searchParams}/>
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder/>  
      </Suspense>
    </div>
  );
}
