import { useEffect, useState } from "react";

const useCountdown = (init = 10) => {
  if (!(init > 1)) {
    throw new Error("useCountdown 需要 init > 1");
  }
  const [count, setCount] = useState(init);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => {
        if (count <= 0) {
          clearInterval(timer);
          return count;
        }
        return count - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return count;
};
export default useCountdown;
