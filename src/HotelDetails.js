import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "./data.json";
import { DatePicker, Form, InputNumber } from "antd";
import "antd/dist/antd.css";
import moment from "moment";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [dateRange, setDateRange] = useState([moment(), moment()]);
  const [guestCount, setGuestCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const foundHotel = data.find((hotel) => hotel.id == id);
    setHotel(foundHotel);
  }, [id]);

  useEffect(() => {
    if (hotel) {
      const [startDate, endDate] = dateRange;
      const totalDays = endDate.diff(startDate, "days") + 1;
      setTotalPrice(totalDays * hotel.price * guestCount);

      console.log({ totalDays, guestCount });
    }
  }, [dateRange, hotel, guestCount]);

  const handleBooking = () => {
    const [startDate, endDate] = dateRange;

    const booking = {
      hotelId: hotel.id,
      dates: [startDate.format("DD-MM-YYYY"), endDate.format("DD-MM-YYYY")],
      guestCount,
      price: totalPrice,
    };

    const existingBookings = localStorage.getItem("bookings")
      ? JSON.parse(localStorage.getItem("bookings"))
      : [];
    existingBookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    alert("Booking confirmed!");
    navigate("/admin");
  };

  return (
    <div className="container mx-auto px-8 py-8">
      {hotel && (
        <div className="lg:flex">
          <div className="lg:w-2/3 pr-4">
            <h2 className="text-2xl font-bold mb-4">{hotel.title}</h2>
            <img
              src={hotel.image}
              alt={hotel.title}
              className="w-full rounded-lg mb-4"
            />
            <p className="mb-4">{hotel.details}</p>
          </div>
          <div className="lg:w-1/3">
            <Form.Item label="Select Dates" colon={false}>
              <DatePicker.RangePicker
                format="MMM Do, YYYY"
                value={dateRange}
                onChange={(x) => setDateRange(x)}
                allowClear={false}
              />
            </Form.Item>
            <Form.Item label="Guests" colon={false}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={guestCount}
                onChange={(value) => setGuestCount(value)}
              />
            </Form.Item>
            <p className="text-xl font-bold mt-4">Total Price: ${totalPrice}</p>
            <button
              onClick={handleBooking}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDetails;
