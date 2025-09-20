import { useState, useEffect } from "react";
let latitude;
let longitude;
export default function useLocation() {
  const [locationName, setLocationName] = useState("");
  const [latFinal, setlatFinal] = useState("");
  const [lonFinal, setlonFinal] = useState("");
  useEffect(() => {
    fetchLatLong();
  }, []);
  useEffect(() => {
    if (latFinal !== "" && lonFinal !== "") {
      fetchLocationName(latFinal, lonFinal);
    }
  }, [lonFinal]);
  function fetchLatLong() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          setlatFinal(latitude);
          setlonFinal(longitude);
        },
        (error) => {
          console.error(`Geolocation error: ${error.message}`);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  async function fetchLocationName(lat, lon) {
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;
    try {
      const response = await fetch(nominatimUrl, {
        headers: {
          // It's good practice to include a User-Agent for Nominatim
          // Replace 'YourAppName/1.0 (your-email@example.com)' with your actual app name and contact email
          "User-Agent": "SwiggyDummy (vishnurelampal@gmail.com)",
        },
      });

      if (!response.ok) {
        //  throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setLocationName(data);
    } catch (error) {
      //console.error("Error fetching location name:", error);
    }
  }
  // console.log(locationName);
  return locationName;

  // Call the function to fetch the location name
}
