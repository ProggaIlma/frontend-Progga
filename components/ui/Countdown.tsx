"use client";
import { useCountdown } from "@/hooks/useCountdown";

export default function Countdown({ initialSeconds }: { initialSeconds: number }) {
  const { d, h, m, s } = useCountdown(initialSeconds);
  return (
    <span style={{ color: "var(--text)" }}>
      {d}d : {h}h : {m}m : {s}s
    </span>
  );
}
