"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";

export default function Clock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: site.tz,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="mono">
      {site.location} · {time} {site.tzLabel}
    </span>
  );
}
