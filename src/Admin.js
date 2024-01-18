import React from "react";
import data from "./data.json";

const Admin = () => {
  const bookings = localStorage.getItem("bookings");
  const parsedBookings = JSON.parse(bookings) || [];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Booking Management</h2>
      {parsedBookings.length === 0 ? (
        <p className="text-gray-600">No bookings available.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left border-b">Booking #</th>
              <th className="py-2 px-4 text-left border-b">Hotel</th>
              <th className="py-2 px-4 text-left border-b">Dates</th>
              <th className="py-2 px-4 text-left border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {parsedBookings.map((booking, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="py-2 px-4 text-left border-b">{index + 1}</td>
                <td className="py-2 px-4 text-left border-b">
                  {data.find((hotel) => hotel.id === booking.hotelId).title}
                </td>
                <td className="py-2 px-4 text-left border-b">
                  {booking.dates.join(" - ")}
                </td>
                <td className="py-2 px-4 text-left border-b">
                  ${booking.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
