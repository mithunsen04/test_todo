import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  return (
    <Link to={`/hotels/${hotel.id}`}>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={hotel.image}
          alt={hotel.title}
          className="w-full h-64 object-cover"
        />
        <h4 className="text-lg font-semibold mt-4">{hotel.title}</h4>
        <p className="text-gray-500">{hotel.price} per night</p>
      </div>
    </Link>
  );
};
export default HotelCard;
