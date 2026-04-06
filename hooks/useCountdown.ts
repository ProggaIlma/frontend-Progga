"use client";
import { useEffect, useState } from "react";

interface CountdownValues {
  d: string;
  h: string;
  m: string;
  s: string;
}

export function useCountdown(initialSeconds: number): CountdownValues {
  const [end] = useState(() => Date.now() + initialSeconds * 1000);
  const [values, setValues] = useState<CountdownValues>({
    d: "4",
    h: "02",
    m: "41",
    s: "17",
  });

  useEffect(() => {
    const pad = (n: number) => String(n).padStart(2, "0");
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setValues({
        d: String(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [end]);

  return values;
}
