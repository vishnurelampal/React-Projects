import { useState, useEffect } from "react";
export default function useResApi() {
  const [res, setRestaurants] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rawData = await fetch("https://dummyjson.com/recipes");
    //  const rawData = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.8969928&lng=76.647047&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await rawData.json();
    setRestaurants(data.recipes);
    await console.log(res);
  };
  return res;
}
