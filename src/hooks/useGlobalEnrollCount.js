import { useEffect, useState } from "react";
import { getGlobalEnrollCount } from "@/utils/enrollCount";

export function useGlobalEnrollCount(options) {
  const [count, setCount] = useState(() =>
    getGlobalEnrollCount(options)
  );

  useEffect(() => {
    const update = () => {
      setCount(getGlobalEnrollCount(options));
    };

    update();

    // check every minute (cheap & safe)
    const interval = setInterval(update, 60 * 1000);

    return () => clearInterval(interval);
  }, [options]);

  return count;
}
