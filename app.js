const fetch = require("node-fetch");

const event = {
  "Event": "Uber Ride",
  "Price": 9.99,
  "Driver_Rating": 5,
  "Driver_ID": "123",
  "Day_Of_Week": "Saturday",
};

const payload = {
  api_key: "c83991fe-e917-44ea-be10-82ef8110fead",
  json: JSON.stringify(event),
  timestamp: Math.floor(new Date().getTime() / 1000),
};

const response = await fetch("https://www.graphjson.com/api/log", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body
