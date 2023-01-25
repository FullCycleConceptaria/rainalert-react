import { useState, useEffect } from 'react';

export function useDate() {
  const [hour, sethour] = useState('00:00');
  let date = new Date();
  useEffect(() => {
    const realDate = window.setInterval(() => {
      date = new Date();
      sethour(
        `${date.getHours()}:${
          date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()
        }`
      );
    }, 1000);
    return () => clearInterval(realDate);
  }, []);
  return hour;
}
