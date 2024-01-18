import React from "react";
import data from "./data.json";
import HotelCard from "./HotelCard";

const Hotels = () => {
  return (
    <>
      <h1 className=" text-center font-semibold gap-4 mt-4 text-3xl ">
        Hotel MS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </>
  );
};
export default Hotels;
