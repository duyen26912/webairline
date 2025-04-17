import React, { useState, useEffect, useRef } from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const airportData = [
  {
    code: "SGN",
    name: "Tan Son Nhat International Airport",
    city: "Ho Chi Minh City",
    country: "Vietnam",
  },
  {
    code: "HAN",
    name: "Noi Bai International Airport",
    city: "Hanoi",
    country: "Vietnam",
  },
  {
    code: "DAD",
    name: "Da Nang International Airport",
    city: "Da Nang",
    country: "Vietnam",
  },
  {
    code: "CXR",
    name: "Cam Ranh International Airport",
    city: "Nha Trang",
    country: "Vietnam",
  },
  {
    code: "PQC",
    name: "Phu Quoc International Airport",
    city: "Phu Quoc",
    country: "Vietnam",
  },
  {
    code: "HKG",
    name: "Hong Kong International Airport",
    city: "Hong Kong",
    country: "China",
  },
  {
    code: "BKK",
    name: "Suvarnabhumi Airport",
    city: "Bangkok",
    country: "Thailand",
  },
  {
    code: "SIN",
    name: "Changi Airport",
    city: "Singapore",
    country: "Singapore",
  },
  {
    code: "NRT",
    name: "Narita International Airport",
    city: "Tokyo",
    country: "Japan",
  },
  {
    code: "ICN",
    name: "Incheon International Airport",
    city: "Seoul",
    country: "South Korea",
  },
  { code: "SYD", name: "Sydney Airport", city: "Sydney", country: "Australia" },
  {
    code: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
    country: "USA",
  },
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
    country: "USA",
  },
  { code: "LHR", name: "Heathrow Airport", city: "London", country: "UK" },
  {
    code: "CDG",
    name: "Charles de Gaulle Airport",
    city: "Paris",
    country: "France",
  },
  {
    code: "FRA",
    name: "Frankfurt Airport",
    city: "Frankfurt",
    country: "Germany",
  },
  {
    code: "DXB",
    name: "Dubai International Airport",
    city: "Dubai",
    country: "UAE",
  },
  {
    code: "PEK",
    name: "Beijing Capital International Airport",
    city: "Beijing",
    country: "China",
  },
  {
    code: "PVG",
    name: "Shanghai Pudong International Airport",
    city: "Shanghai",
    country: "China",
  },
  {
    code: "DEL",
    name: "Indira Gandhi International Airport",
    city: "Delhi",
    country: "India",
  },
];

const AirportInput = ({ label, icon, value, onChange, name }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Find the airport by code when the component mounts or value changes
    if (value && value.length === 3) {
      const airport = airportData.find((a) => a.code === value);
      if (airport) {
        setInputValue(`${airport.city} (${airport.code}) - ${airport.name}`);
      } else {
        setInputValue(value);
      }
    } else {
      setInputValue(value);
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 1) {
      const filtered = airportData.filter(
        (airport) =>
          airport.name.toLowerCase().includes(value.toLowerCase()) ||
          airport.city.toLowerCase().includes(value.toLowerCase()) ||
          airport.code.toLowerCase().includes(value.toLowerCase()) ||
          airport.country.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (airport) => {
    const displayValue = `${airport.city} (${airport.code}) - ${airport.name}`;
    setInputValue(displayValue);
    onChange({ target: { name, value: airport.code } });
    setShowSuggestions(false);
  };

  const Icon = icon === FaPlaneDeparture ? FaPlaneDeparture : FaPlaneArrival;

  return (
    <div className="airportInput" ref={wrapperRef}>
      <label htmlFor={name}>
        <Icon className="icon" /> {label}
      </label>
      <input
        type="text"
        placeholder="City or Airport"
        name={name}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => inputValue.length > 1 && setShowSuggestions(true)}
        autoComplete="off"
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestionsDropdown">
          {suggestions.map((airport, index) => (
            <div
              key={`${airport.code}-${index}`}
              className="suggestionItem"
              onClick={() => handleSuggestionClick(airport)}
            >
              <div className="airportCode">{airport.code}</div>
              <div className="airportInfo">
                <div className="airportCityCountry">
                  <span className="city">{airport.city}</span>
                  <span className="country">{airport.country}</span>
                </div>
                <div className="airportName">{airport.name}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AirportInput;
