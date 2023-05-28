import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function BookingCalendar({ availabilities }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    setFeedbackMessage("");
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    setFeedbackMessage("");
  };

  const isDateAvailable = (date) => {
    const formattedDate = formatDate(date);
    const currentDate = formatDate(new Date());

    return (
      date < new Date() ||
      availabilities.some(
        (availability) =>
          formattedDate >= availability.startDate &&
          formattedDate <= availability.endDate
      )
    );
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleBooking = () => {
    if (selectedStartDate && selectedEndDate) {
      // Perform booking logic here
      setFeedbackMessage("Booking successful!"); // Set success message
    } else {
      setFeedbackMessage("Please select both start and end dates."); // Set error message
    }
  };

  return (
    <CalendarContainer>
      <Header>Choose Dates to Book</Header>
      <Description>
        Select the start and end dates for your stay at the apartment.
      </Description>
      <CalendarWrapper>
        <Calendar
          onChange={handleStartDateChange}
          value={selectedStartDate}
          tileDisabled={({ date }) => isDateAvailable(date)}
        />
        <Calendar
          onChange={handleEndDateChange}
          value={selectedEndDate}
          tileDisabled={({ date }) =>
            date < selectedStartDate || isDateAvailable(date)
          }
        />
      </CalendarWrapper>
      <FeedbackMessage>{feedbackMessage}</FeedbackMessage>
      <BookButton onClick={handleBooking}>Book Now</BookButton>
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Header = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FeedbackMessage = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const BookButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 18px 56px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 99px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #4caf50;
    border: 2px solid #4caf50;
  }
`;
