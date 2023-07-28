"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_EXTREME_IP_LOOKUP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCountry(data?.country);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>{country}</h1>
    </div>
  );
}
