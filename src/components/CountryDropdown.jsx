import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import Timer from "./Timer";
import { customStyles } from "../assets/customeStyles";

function CountryDropdown() {
  const [timezones, setTimeZones] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState(null);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    async function getCountries() {
      try {
        const res = await axios.get(`http://worldtimeapi.org/api/timezone`);
        const timeZones = res.data.map((tz) => ({
          label: tz,
          value: tz,
        }));
        setTimeZones(timeZones);
      } catch (error) {
        console.log("Error in getting timeZones:", error);
      }
    }
    getCountries();
  }, []);

  useEffect(() => {
    if (selectedTimezone) {
      clearInterval(intervalId); // Clear previous interval
      const newInterval = setInterval(() => {
        fetchCurrentTime(selectedTimezone.value);
      }, 1000);
      setIntervalId(newInterval); // Set new interval
      fetchCurrentTime(selectedTimezone.value); // Fetch immediately on selection
      setIsRunning(true);
    } else {
      clearInterval(intervalId); // Clear interval when no timezone selected
    }
  }, [selectedTimezone]);

  const fetchCurrentTime = async (tz) => {
    try {
      const response = await axios.get(
        `http://worldtimeapi.org/api/timezone/${tz}`
      );
      const time = new Date(response.data.datetime);
      const options = {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: tz,
      };

      const formattedTime = time.toLocaleString("en-US", options);
      setCurrentTime(formattedTime);
    } catch (error) {
      console.log("Error in fetching current time:", error);
    }
  };

  const handleTimezoneChange = (selectedOption) => {
    setSelectedTimezone(selectedOption);
  };

  function pauseTimer() {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  }

  function startTimer() {
    if (selectedTimezone && !isRunning) {
      clearInterval(intervalId);
      const newInterval = setInterval(() => {
        fetchCurrentTime(selectedTimezone.value);
      }, 1000);
      setIntervalId(newInterval);
      setIsRunning(true);
    }
  }

  return (
    <div id="cnt-drp">
      <div className="select">
        <Select
          options={timezones}
          value={selectedTimezone}
          onChange={handleTimezoneChange}
          placeholder="Choose timezone"
          styles={customStyles}
        />
      </div>
      <div className="timer-container">
        <div className="timer">
          <Timer currentTime={currentTime} />
        </div>
        <button id="start-btn" onClick={isRunning ? pauseTimer : startTimer}>
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default CountryDropdown;
