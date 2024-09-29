import { useEffect } from "react";

export const useBgColor = (color) => {
  useEffect(() => {
    document.body.style.backgroundColor = color || "";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
