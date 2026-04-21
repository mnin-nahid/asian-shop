"use client";

import { useEffect, useState } from "react";

export default function useCountdown(endDate) {
  const calculateTime = () => {
    if (!endDate) return null;

    const diff = new Date(endDate) - new Date();

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  // initialize state lazily (important fix)
  const [timeLeft, setTimeLeft] = useState(() => calculateTime());

  useEffect(() => {
    if (!endDate) return;

    const timer = setInterval(() => {
      const updated = calculateTime();

      // only update if value actually changed
      setTimeLeft((prev) => {
        if (
          !prev ||
          prev.seconds !== updated?.seconds ||
          prev.minutes !== updated?.minutes ||
          prev.hours !== updated?.hours ||
          prev.days !== updated?.days
        ) {
          return updated;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return timeLeft;
}